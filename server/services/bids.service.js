import Bid from "../models/bid.model.js";
import { getGigById } from "./gigs.service.js";

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
