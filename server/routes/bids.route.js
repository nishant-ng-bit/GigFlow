import {
  createBidController,
  getBidsByGigIdController,
} from "../controllers/bids.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const bidsRoute = (router) => {
  router.post("/bids", authMiddleware, createBidController);
  router.get("/bids/:gigId", authMiddleware, getBidsByGigIdController);
};
