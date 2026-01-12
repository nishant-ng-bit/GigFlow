import {
  loginUserController,
  registerUserController,
} from "../controllers/auth.controller.js";

export const authRoute = (router) => {
  router.post("/auth/register", registerUserController);
  router.post("/auth/login", loginUserController);
};
