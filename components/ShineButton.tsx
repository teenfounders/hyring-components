import React from "react";
import Image, { StaticImageData } from "next/image";

import pricing from "@/public/price.svg";
import pricing2 from "@/public/pricing2.svg";
import logo1 from "@/public/navbar-hyting.svg";
import square from "@/public/square.png";
import { url } from "inspector";
import smallyello from "@/public/yellow.svg";
import { twMerge } from "tailwind-merge";
type Props = {
  text?: string;
  className?: string;
};

const ShineButton = (props: Props) => {
  return (
    <div className="w-full group/edit ">
      <div
        className={twMerge(
          `w-[180px]  lg:w-[220px] h-[52px] lg:h-[62px]  border-2 bg-bg-primary-orange relative overflow-hidden  rounded-[5px] border-primary-brown 
              before:content-[''] disableAnimate={true} before:w-[237px] before:h-[300px] before:-top-[234px] before:-left-[17px] lg:before:w-[344px] lg:before:h-[379px] 
              before:rounded-[20px] button-hover before:absolute lg:before:-top-[284px] lg:before:-left-[36px] before:-z-1 before:bg-primary-orange
       before:animate-circleFill  before:bg-[#FFB65E]   flex justify-center items-center relative z-30 text-black `,
          props.className
        )}
      >
        <div className="w-[180px] lg:w-[220px] group-hover/items:bg-white h-[52px] lg:h-[62px] border-2 bg-bg-primary-orange relative overflow-hidden rounded-[5px]  ">
          <div className="mx-auto flex items-center  w-full h-full justify-center gap-1">
            <div className="mr-1 font-medium text-lg btn-anim text-black md:text-lg">
              {" "}
              {/* Set text color to black */}
              {props.text}
            </div>
            <div className="move-left-and-right">
              <Image
                src={logo1}
                className="w-fit h-fit"
                width={100}
                height={100}
                alt="image"
              />
            </div>  
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[62px] h-[52px] group-hover/edit:opacity-100 opacity-0 top-1 left-1   duration-300 rounded-[5px] bg-primary-brown      absolute  "></div>
    </div>
  );
};

export default ShineButton;
