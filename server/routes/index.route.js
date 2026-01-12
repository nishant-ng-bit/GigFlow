import express from "express";
import { authRoute } from "./auth.route.js";

const router = express.Router();

authRoute(router);
export default router;
