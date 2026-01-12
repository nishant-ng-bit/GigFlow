import { createBid, getBidsByGigId } from "../services/bids.service.js";

export const createBidController = async (req, res) => {
  try {
    const bidData = req.body;
    bidData.freelancerId = req.user.id;

    const bid = await createBid(bidData);
    res.status(200).json(bid);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBidsByGigIdController = async (req, res) => {
  try {
    req.params.userId = req.user.id;
    const bids = await getBidsByGigId(req.params.gigId, req.params.userId);
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
