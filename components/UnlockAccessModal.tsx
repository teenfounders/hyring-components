"use client";
import React, { useEffect } from "react";
import Modal from "@/components/Modal";
import useUnlockAccessModal from "@/hooks/useUnlockAccessModal";
import { useRouter } from "next/navigation";
import UnlockAccessModalCard from "./UnlockAccessModalCard";

type Props = {};

const AuthModal = (props: Props) => {
  const router = useRouter();

  const { onClose, isOpen } = useUnlockAccessModal();
  console.log(isOpen);
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <div className="h-full w-full ">
      <Modal isOpen={isOpen} onChange={onChange} title={""} description={""}>
        <UnlockAccessModalCard />
      </Modal>
    </div>
  );
};

export default AuthModal;
