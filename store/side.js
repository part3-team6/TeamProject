import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSideStore = create(
  persist(
    (set) => ({
      side: {
        dashboards: [
          {
            id: 0,
            title: "",
            color: "",
            userId: 613,
            createdAt: "",
            updatedAt: "",
            createdByMe: true,
          },
        ],
        totalCount: null,
        cursorId: null,
      },
      setSide: (userInfo) => set({ side: userInfo }),
    }),
    {
      name: "side-store", // localStorage에 저장될 때 사용될 키
      getStorage: () => localStorage, // 사용할 스토리지 지정
    },
  ),
);

export default useSideStore;
