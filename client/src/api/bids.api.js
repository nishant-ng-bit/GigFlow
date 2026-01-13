import axiosInstance from "./axios.api";

export const postBid = async (bidData) => {
  return await axiosInstance.post("/bids", bidData);
};

export const getAllBids = async (gigId) => {
  const res = await axiosInstance.get(`/bids/${gigId}`);
  return res.data;
};

export const hireBid = async (bidId) => {
  return await axiosInstance.patch(`/bids/${bidId}/hire`);
};
