import Bid from "../models/bid.model.js";
import { getGigById } from "./gigs.service.js";
import Gig from "../models/gig.model.js";
import mongoose from "mongoose";
export const createBid = async (bidData) => {
  const { gigId, freelancerId, message } = bidData;
  if (!gigId || !freelancerId || !message) {
    throw new Error("All fields are required");
  }

  const existingBid = await Bid.findOne({ gigId, freelancerId });
  if (existingBid) {
    throw new Error("Bid already exists");
  }

  const bid = await Bid.create(bidData);
  return bid;
};

export const getBidsByGigId = async (gigId, userId) => {
  const gig = await getGigById(gigId);
  if (!gig) throw new Error("Gig not found");

  if (gig.ownerId !== userId) throw new Error("Unauthorized");

  const bids = await Bid.find({ gigId });
  return bids;
};

export const hireBid = async (bidId, userId) => {
  if (!bidId) throw new Error("Bid ID is required");

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bid = await Bid.findById(bidId).session(session);
    if (!bid) throw new Error("Bid not found");

    const gig = await Gig.findById(bid.gigId).session(session);
    if (!gig) throw new Error("Gig not found");

    if (gig.ownerId !== userId) {
      throw new Error("Unauthorized");
    }

    bid.status = "hired";
    await bid.save({ session });

    gig.status = "assigned";
    await gig.save({ session });

    await Bid.updateMany(
      {
        gigId: bid.gigId,
        _id: { $ne: bidId },
      },
      { $set: { status: "rejected" } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return bid;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
