import express from "express";
import { authRoute } from "./auth.route.js";
import { gigsRoute } from "./gigs.route.js";
import { bidsRoute } from "./bids.route.js";
import { userRoute } from "./user.route.js";

const router = express.Router();

authRoute(router);
gigsRoute(router);
bidsRoute(router);
userRoute(router);

export default router;
