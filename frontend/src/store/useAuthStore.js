import { create } from "zustand"; // global state management
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  authUser: null, // initial user state
  isCheckingAuth: true,
  isSigningUp: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log("Error in authCheck:", error);
            set({ authUser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });

            toast.success("Account Created Successfully!");
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message || "An Error Occurred During Signup";
            toast.error(errorMessage);
        } finally {
            set({ isSigningUp: false });
        }
    },
}));