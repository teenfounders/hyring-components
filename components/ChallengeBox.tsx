import Image from "next/image";
import React from "react";
import important from "@/public/important.svg";
import imp2 from "@/public/challenge/imp2.svg";
import imp3 from "@/public/challenge/imp3.svg";
import imp4 from "@/public/challenge/imp4.svg";
import imp5 from "@/public/challenge/imp5.svg";
type Props = {};

const ChallengeBox = (props: Props) => {
  return (
    <div className="w-full rounded-[9px] border-2 border-primary-brown   relative  ">
      <div className="border-3   w-full !justify-start  bg-white   rounded-[9px] border-primary-brown flex justify-center items-center relative z-1 ">
        <div className="mx-auto w-full max-w-[1150px]  p-5 md:p-10">
          <div className="flex flex-wrap-reverse items-center justify-between gap-2  px-0 md:flex-nowrap   ">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col font-WhyteInktrap text-primary-brown text-3xl   md:text-5xl">
                <h2>Challenges in</h2>
                <h2 className="">Staff Augmentation</h2>
              </div>
              <p className="text-md mt-5 font-primaryLight  font-[400] md:text-xl lg:w-9/12 ">
                Despite the widespread adoption of staff augmentation models,
                many businesses have encountered obstacles such as
              </p>
            </div>
            <div className="-ml-8 scale-[0.6] xxs:-ml-7  xxs:scale-[0.7] sm:-ml-6 sm:scale-[0.8] md:ml-0 md:scale-[0.9] lg:scale-[1]">
              <Image
                src={important}
                width={1000}
                height={1000}
                className="w-fit h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className=" my-10 w-full border border-[#000000]"></div>
          <div className=" grid w-full grid-cols-fluid place-items-center gap-y-5 sm:justify-items-center ">
            <div className="">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src={imp2}
                  width={1000}
                  height={1000}
                  className="w-fit h-full object-cover"
                  alt=""
                />
                <div className="font[400] my-2 font-WhyteInktrap-regular text-primary-brown  flex w-full flex-row gap-2 font-primary text-xl sm:flex-col sm:text-2xl md:text-3xl">
                  <h3>Subpar</h3>
                  <h3>Developers</h3>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src={imp3}
                  width={1000}
                  height={1000}
                  className="w-fit h-full object-cover"
                  alt=""
                />
                <div className="font[400] my-2 font-WhyteInktrap-regular text-primary-brown  flex w-full flex-row gap-2 font-primary text-xl sm:flex-col sm:text-2xl md:text-3xl">
                  <h3>Hefty</h3>
                  <h3>Commission</h3>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src={imp4}
                  width={1000}
                  height={1000}
                  className="w-fit h-full object-cover"
                  alt=""
                />
                <div className="font[400] my-2 font-WhyteInktrap-regular text-primary-brown  flex w-full flex-row gap-2 font-primary text-xl sm:flex-col sm:text-2xl md:text-3xl">
                  <h3>Ambiguous</h3>
                  <h3>Contracts</h3>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src={imp5}
                  width={1000}
                  height={1000}
                  className="w-fit h-full object-cover"
                  alt=""
                />
                <div className="font[400] my-2 font-WhyteInktrap-regular text-primary-brown  flex w-full flex-row gap-2 font-primary text-xl sm:flex-col sm:text-2xl md:text-3xl">
                  <h3>Outdated</h3>
                  <h3>Portals</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:h-full  rounded-[9px] bg-primary-brown border-3 border-white  top-2 left-[10px] -z-10  absolute  "></div>
    </div>
  );
};

export default ChallengeBox;
