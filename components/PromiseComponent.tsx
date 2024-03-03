import Image, { StaticImageData } from "next/image";
import React from "react";
import greenstarts from '@/public/greenstars.svg'
import { twMerge } from "tailwind-merge";
type Props = {
  title?:string;
  description?:string;
  image1?:string | StaticImageData;
  startimage?:string;
  className?:string;
};

const PromiseComponent = (props: Props) => {
  return (
    <div className="pt-10 w-full relative  md:pt-2 lg:pt-3 2xl:pt-4">
      <div className=" h-[280px] md:h-[270px] lg:h-[330px]   2xl:h-[370px] 4xl:h-[445px]     w-fit  cursor-pointer m-auto  relative  ">

       <div
       
       className={twMerge("h-[240px] md:h-[240px] lg:h-[300px]  2xl:h-[340px] 4xl:h-[415px] bg-[#b6eccc] z-10       w-[290px] xs:w-[340px] sm:w-[400px] md:w-[340px] lg:w-[500px] 2xl:w-[610px] 4xl:w-[650px] !justify-start border-2  rounded-[16px] border-primary-brown flex justify-center items-center relative z-10  ",props.className)}
       >
        <div className="scale-[0.6] md:scale-[.7] lg:scale-[0.9] xl4:scale-[1] absolute -top-8 -right-8  ">
          {/* start */}

          <Image src={props.startimage || greenstarts} width={800/2} height={400/2}  className="w-fit animate-spin-slow" alt="image" />
        </div>
        <div className="pl-5  sm:pl-10 md:pl-7 lg:pl-8 pr-2 lg:pr-5 lg:py-5  flex flex-col  justify-start items-start">
          <div className="scale-[0.6] lg:scale-[0.8] xl3:scale-[1] h-10 text-left w-fit -ml-5 lg:-ml-0 ">
          <Image src={props.image1 || ''} width={800/2} height={400/2}  className="w-fit" alt="image" />
            {/* main image */}
          </div>
          <p className="sm:text-xl md:text-lg lg:text-2xl xl3:text-3xl font-medium  font-WhyteInktrap-medium text-primary-brown  xl4:text-5xl font-primaryMedium mt-3  leading-5 pt-8 md:pt-10 lg:pt-16 xl3:pt-24">
            {props.title}
          </p>
          <p className="text-base mt-2 md:text-[14px] lg:text-lg xl4:text-[26px] xl4:pt-5 font-WhyteInktrap-regular">
          {props.description}
          </p>
        </div>
      </div>
        <div
          className="w-[290px] xs:w-[340px] sm:w-[400px] md:w-[340px] lg:w-[500px] 2xl:w-[610px] xl4:w-[650px]
          h-[240px] md:h-[240px] lg:h-[300px] 2xl:h-[340px]  xl4:h-[415px]
          rounded-[16px]  bg-primary-brown  top-2 left-2   absolute  -z-10  "
          ></div>

          </div>
   </div>
  );
};

export default PromiseComponent;
