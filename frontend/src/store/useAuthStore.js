import { create } from "zustand"; // global state management

export const useAuthStore = create((set, get) => ({
    authUser: { name: "John", _id: 123, age: 25 },
    isLoggedIn: false,
    isLoading: false,


    login: () => {
        console.log("Just Logged In");
        set({ isLoggedIn: true, isLoading: true });
    }
}));