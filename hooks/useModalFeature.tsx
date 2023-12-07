import { create } from "zustand";

type ModalState = {
  show: "jobseeker" | "employee" | "";
  setShow: (view: "jobseeker" | "employee" | "") => void;
};

export const useModalStore = create<ModalState>((set) => ({
  show: "",
  setShow: (view) => set({ show: view }),
}));
