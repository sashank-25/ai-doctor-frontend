import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-doctor-backend-production-0cf1.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeSymptomsAPI = (symptoms) => {
  return API.post("/analyze", { symptoms });
};
