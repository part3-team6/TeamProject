import { create } from "zustand";

const useColumnsStore = create((set) => ({
  columns: {},
  setColumns: (newColumns) => set({ columns: newColumns }),
  pageId: "",
  setPageId: (newColumns) => set({ pageId: newColumns }),
}));

export default useColumnsStore;
