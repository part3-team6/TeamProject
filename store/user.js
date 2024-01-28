import create from "zustand";

const useUserStore = create((set) => ({
  user: "",
  setUser: (text) => set({ user: text }),
}));

export default useUserStore;
