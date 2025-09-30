import { create } from 'zustand';
import toast from "react-hot-toast";

import { axiosInstance } from "../lib/axios.js";

export const useChatStore = create((set, get) => ({
    allContacts: [],
    chats: [],
    messages: [],
    activeTab: "chats",
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,
    isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

    setActiveTab: (tab) => set({ activeTab: tab }),
    setSelectedUser: (user) => set({ selectedUser: user }),

    toggleSound: () => {
        localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
        set({ isSoundEnabled: !get().isSoundEnabled });
    },

    getAllContacts: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/contacts");
            set({ allContacts: res.data });
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message || "An Error Occurred Getting Contacts";
            toast.error(errorMessage);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMyChatPartners: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/chats");
            set({ chats: res.data });
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message || "An Error Occurred Getting Chat Partners";
            toast.error(errorMessage);
        } finally {
            set({ isUsersLoading: false });
        }
    },
}));