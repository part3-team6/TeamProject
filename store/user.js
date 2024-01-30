import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: {
        id: 638,
        email: "pilltest3@codeit.com",
        nickname: "필테스트3",
        profileImageUrl: null,
        createdAt: "2024-01-28T17:49:09.482Z",
        updatedAt: "2024-01-28T17:49:09.482Z",
      },
      setUser: (userInfo) => set({ user: userInfo }),
    }),
    {
      name: "user-store", // localStorage에 저장될 때 사용될 키
      getStorage: () => localStorage, // 사용할 스토리지 지정
    },
  ),
);

export default useUserStore;
