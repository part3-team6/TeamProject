import { create } from "zustand";

const useEditStore = create((set) => ({
  inputState: "",
  setInputState: (state) => set({ inputState: state }),
  colorState: "",
  setColorState: (state) => set({ colorState: state }),
}));

export default useEditStore;
