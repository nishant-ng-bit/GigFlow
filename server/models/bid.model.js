import mongoose from "mongoose";

const BidSchema = new mongoose.Schema({
  gigId: {
    type: String,
    required: true,
  },
  freelancerId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Bid", BidSchema);
