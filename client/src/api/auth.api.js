import axiosInstance from "./axios.api";

export const loginUser = async (userData) => {
  const res = await axiosInstance.post("/auth/login", userData);
  return res.data;
};

export const registerUser = async (userData) => {
  console.log("user data", userData);
  const res = await axiosInstance.post("/auth/register", userData);
  return res.data;
};
