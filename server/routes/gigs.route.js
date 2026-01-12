import {
  createGigsController,
  getOpenGigsController,
} from "../controllers/gigs.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const gigsRoute = (router) => {
  router.get("/gigs", getOpenGigsController);
  router.post("/gigs", authMiddleware, createGigsController);
};
