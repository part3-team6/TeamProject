import { create } from "zustand";

export const useTodoModalStore = create((set) => ({
  editedCardId: 0,
  setEditedCardId: (state) => set({ editedCardId: state }),
  isCreateCardOpen: false,
  setIsCreateCardOpen: (state) => set({ isCreateCardOpen: state }),
  isEditCardOpen: false,
  setIsEditCardOpen: (state) => set({ isEditCardOpen: state }),
  isCreateColumnOpen: false,
  setIsCreateColumnOpen: (state) => set({ isCreateColumnOpen: state }),
  isEditColumnOpen: false,
  setIsEditColumnOpen: (state) => set({ isEditColumnOpen: state }),
  isShowCardOpen: false,
  setIsShowCardOpen: (state) => set({ isShowCardOpen: state }),
}));
