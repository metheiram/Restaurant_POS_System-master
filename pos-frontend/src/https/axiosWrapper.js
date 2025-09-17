import axios from "axios";

// Default headers
const defaultHeader = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Make sure backend URL is set
const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

console.log("🔗 Using Backend URL:", baseURL);

export const axiosWrapper = axios.create({
  baseURL,
  withCredentials: true,
  headers: { ...defaultHeader },
});

// Interceptor to log errors
axiosWrapper.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);
