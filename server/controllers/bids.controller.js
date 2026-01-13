import {
  createBid,
  getBidsByGigId,
  hireBid,
} from "../services/bids.service.js";

export const createBidController = async (req, res) => {
  try {
    const bidData = req.body;
    bidData.freelancerId = req.user.id;

    if (!bidData.freelancerId) throw new Error("freelancerId is required");

    const bid = await createBid(bidData);
    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBidsByGigIdController = async (req, res) => {
  try {
    const bids = await getBidsByGigId(req.params.gigId, req.user.id);
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const hireBidController = async (req, res) => {
  try {
    const bid = await hireBid(req.params.bidId, req.user.id);
    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
