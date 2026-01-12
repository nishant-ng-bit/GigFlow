import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return user;
};

export const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Incorrect password");
  }

  return user;
};
