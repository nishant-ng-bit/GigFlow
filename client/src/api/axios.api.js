import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gigflow-njml.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
