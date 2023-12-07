import React from "react";
import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";
import logo1 from "@/public/navbar-hyting.svg";
type Props = {
  text?: string;
  image1?: string | StaticImageData;
  className?: string;
  onClick?: () => void;
};

const Button = ({ className, onClick, text, image1 }: Props) => {
  return (
    <button
      onClick={onClick}
      className="h-fit group outline-none undefined mx-auto mt-10 w-[95%] cursor-pointer lg:w-[100%]     relative  "
    >
      <div
        className={twMerge(
          `w-full h-fit border-2 group border-primary-brown  rounded-[10px] bg-custom-blue contact-tab py-5 px-6 flex justify-center items-center relative z-1 `,
          className
        )}
      >
        <div className="flex items-center gap-1   ">
          <div className="  mr-1 whitespace-nowrap px-5  font-primaryMedium text-2xl font-medium md:text-[2rem]">
            {text}
          </div>
          <div className="">
            <div className="translate-x-0 duration-300 ease-in-out  group-hover:translate-x-3">
              <Image
                src={logo1 || image1}
                className="w-fit h-fit"
                width={100}
                height={100}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full opacity-0 group-hover:opacity-100 top-[6px] left-[6px] -z-10 rounded-[10px]  duration-500 delay-100 bg-primary-brown   absolute  "></div>
    </button>
  );
};

export default Button;
