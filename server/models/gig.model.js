import mongoose from "mongoose";

const gigSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    ownerId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "open",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gig", gigSchema);
