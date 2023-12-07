"use client";

// import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UnlockAccesModal from "@/components/UnlockAccessModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      {/* <AuthModal /> */}
      <UnlockAccesModal />
    </>
  );
};
export default ModalProvider;
