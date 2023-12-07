import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
      bg-black/50
      z-50
      fixed inset-0"
        >
          <Dialog.Content
            className="
        fixed
        drop-shadow-md
        border 
        bg-white
        top-[50%]
        left-[50%]
        max-h-full
        h-[95%]
        w-[95%]

        md:h-full
    
        md:max-h-[90%]
       
        md:w-[90vw]
        md:max-w-[736px]

        translate-x-[-50%]
        translate-y-[-50%]
        rounded-md
        
       
        focus:outline-none
        "
          >
            {title && (
              <Dialog.Title
                className="
            text-xl
            text-center
            font-bold
            mb-4"
              >
                {title}
              </Dialog.Title>
            )}
            {description && (
              <Dialog.Description
                className="
            mb-5
            text-sm
            leading-normal
            text-center"
              >
                {description}
              </Dialog.Description>
            )}
            <div className=" h-full w-full relative  ">{children}</div>
            {/* <Dialog.Close asChild>
              <button
                className="
              text-neutral-400
              hover:text-white
              top-[10px]
              absolute
              right-[10px]
              inline-flex
              h-[25px]
              w-[25px]
              appearance-none
              items-center
              rounded-full
              focus:outline-none
              "
              >
                <IoMdClose />
              </button>
            </Dialog.Close> */}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
