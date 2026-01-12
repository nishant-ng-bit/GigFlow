import express from "express";
import { authRoute } from "./auth.route.js";
import { gigsRoute } from "./gigs.route.js";
import { bidsRoute } from "./bids.route.js";

const router = express.Router();

authRoute(router);
gigsRoute(router);
bidsRoute(router);

export default router;
