import axiosInstance from "./axios.api";
export const getUser = async () => {
  const res = await axiosInstance.get(`/user`);
  return res.data;
};
