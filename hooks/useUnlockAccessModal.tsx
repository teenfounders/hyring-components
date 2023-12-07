import { create } from "zustand";

interface UnlockAccessStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUnlockAccessModal = create<UnlockAccessStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUnlockAccessModal;
