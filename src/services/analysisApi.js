import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

export const analyzeSymptomsAPI = (symptoms) => {
  return API.post("/analyze", { symptoms });
};
