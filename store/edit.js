import { create } from "zustand";

const useEditStore = create((set) => ({
  inputState: "",
  setInputState: (state) => set({ inputState: state }),
  colorState: "",
  setColorState: (state) => set({ colorState: state }),
  inviteModalState: false,
  setInviteModalState: (state) => set({ inviteModalState: state }),
}));
//const currentState = useEditStore.getState().inputState;
export default useEditStore;
