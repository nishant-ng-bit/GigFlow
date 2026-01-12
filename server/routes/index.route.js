import express from "express";
import { authRoute } from "./auth.route.js";
import { gigsRoute } from "./gigs.route.js";

const router = express.Router();

authRoute(router);
gigsRoute(router);
export default router;
