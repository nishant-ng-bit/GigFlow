import axiosInstance from "./axios.api";

export const postGig = async (gigsData) => {
  return await axiosInstance.post("/gigs", gigsData);
};

export const getGigs = async () => {
  const res = await axiosInstance.get("/gigs");
  return res.data;
};
