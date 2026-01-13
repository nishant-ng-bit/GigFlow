import { loginUser, registerUser } from "../services/auth.service.js";
import jwt from "jsonwebtoken";

export const registerUserController = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    const expiresInDays = 7;

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: `${expiresInDays}d`,
    });

    res.cookie("token", token, {
      expires: new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const user = await loginUser(req.body);
    const expiresInDays = 7;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: `${expiresInDays}d`,
    });

    res.cookie("token", token, {
      expires: new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
