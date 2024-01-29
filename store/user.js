import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (userInfo) => set({ user: userInfo }),
}));

export default useUserStore;
