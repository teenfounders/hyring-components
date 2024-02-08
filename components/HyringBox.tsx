import React from "react";
import Image from "next/image";
import start from "@/public/star.svg";
import yello from "@/public/smallyello.svg";
import logo from "@/public/logo.svg";
type Props = {};

const HyringBox = (props: Props) => {
  return (
    <div className=" w-full  relative  ">
      <div className="w-full !justify-start h-[21rem] md:h-[23rem]  bg-custom-green border border-primary-brown rounded-[20px] md:rounded-full   flex justify-center items-center relative z-30 ">
        <div className=" mt-3 w-full p-4 md:p-8">
          <div className="flex flex-wrap items-center justify-around gap-14 md:gap-0 ">
        <div className="order-2 text-center font-primary text-2xl md:w-1/2 md:text-left  md:text-3xl xl:text-4xl  ">
            <h2>With Hyring, you can focus on your core business while we expertly manage your contract employees.</h2>
        </div>
            <div className="order-1">
              <div className="relative">
                <div className="absolute  -right-10  -top-6 scale-[0.7] md:-top-14 md:scale-[1] xl4:-right-32">
                  <Image
                    src={start}
                    width={1000}
                    height={1000}
                    className="w-fit h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="scale-[0.8] md:scale-[1] xl4:scale-[1.3]">
                  <Image
                    src={logo}
                    width={1000}
                    height={1000}
                    className="w-fit h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute -bottom-6 -left-10 scale-[0.7] md:-bottom-14 md:scale-[1] 4xl:-left-32    ">
                  <Image
                    src={yello}
                    width={1000}
                    height={1000}
                    className="w-fit  h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:h-full   md:rounded-full bg-primary-brown border-3 border-white rounded-[20px]   absolute top-2 left-2 "></div>
    </div>
  );
};

export default HyringBox;
