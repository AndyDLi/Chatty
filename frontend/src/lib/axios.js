import axios from "axios"; // axios for simplified API calls and HTTP requests

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api", // base URL for API requests, changes based on environment
    withCredentials: true, // include cookies with requests
});