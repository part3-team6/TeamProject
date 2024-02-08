import { create } from "zustand";

const useInviteModalStore = create((set) => ({
  inviteModalState: false,
  setInviteModalState: (state) => set({ inviteModalState: state }),
  errorModal: false,
  setErrorModal: (state) => set({ errorModal: state }),
  errorModal2: false,
  setErrorModal2: (state) => set({ errorModal2: state }),
  emailListData: undefined,
  setEmailListData: (state) => set({ emailListData: state }),
}));

export default useInviteModalStore;
