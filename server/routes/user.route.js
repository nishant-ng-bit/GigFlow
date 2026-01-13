import { getUserByIdController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const userRoute = (router) => {
  router.get("/user", authMiddleware, getUserByIdController);
};
