"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
 
import aboutimg1 from "@/public/aboutimg1.svg";
import aboutimg2 from "@/public/aboutimg2.svg";
import aboutimg3 from "@/public/aboutimg3.svg";
import aboutimg4 from "@/public/aboutimg4.svg";
import aboutimg5 from "@/public/aboutimg5.svg";
import aboutimg6 from "@/public/aboutimg6.svg";
import aboutimg7 from "@/public/aboutimg7.svg";
import line from '@/public/challenge/line.svg'
import aboutimg9 from "@/public/aboutimg9.svg";
import aboutimg10 from "@/public/aboutimg10.svg";
import aboutimg11 from "@/public/aboutimg11.svg";
import circle from "@/public/circle-hyring.svg";
import Link from "next/link";
import ChallengeBox from "@/components/ChallengeBox";
import HyringBox from "@/components/HyringBox";
import SpinComponent from "@/components/SpinComponent";
 
type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full h-full  relative ">
      <div className="mx-auto my-0 max-w-[1800px]">
        <div className="flex flex-col items-center gap-6 ">
          <div className="mt-5 text-center font-primaryBold text-[40px]  lg:mt-[40px] lg:text-[58px]  ">
            Introducing
            <p className="relative mx-2 inline-block lg:mx-3">
              <span className="absolute -left-[22px] -top-4 scale-[0.7] lg:-left-1 lg:-top-3 lg:scale-[1]  ">
                <Image
                  src={circle}
                  width={100}
                  className="w-full h-fit"
                  height={100}
                  alt={"image"}
                />
              </span>
              Hyring
            </p>
          </div>
          <p className="w-[95vw] text-center font-primaryLight text-[18px] font-[500] md:w-3/5 lg:text-[28px] lg:font-normal">
            <Link href={"/"}>Hyring</Link>is revolutionizing the
            <b>IT staff augmentation</b>
            industry by harnessing the power of AI to connect the
            <b>Top 5% of Indian talent</b>
            with
            <b className="pl-[6px]">world-class companies</b>
            around the globe
          </p>
          <p className="w-[95vw] text-center font-primaryLight  text-[18px] font-[500] md:w-3/5 lg:text-[28px] lg:font-normal ">
            Born amid the pandemic, Hyring’s journey began when the demand for
            IT resources surged exponentially. Leveraging a
            <b>decade of staff augmentation experience</b>
            from
            <Link href={"/"}>Domaincer</Link>, our IT firm, we were able to
            swiftly match hundreds of skilled developers with rapidly growing
            companies and innovative startups within just one year.
          </p>
        </div>
        <div className="">
          <div className="my-10 flex  justify-between md:px-10 lg:my-28">
            <div className="relative">
              <div className="absolute -right-40 -top-32 hidden lg:flex">
                <Image
                  src={aboutimg1}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-8 hidden h-14 w-14 scale-[0.7] lg:flex">
                <Image
                  src={aboutimg2}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="flex w-full     items-center justify-between  lg:basis-[65%]  ">
              <div className="w-full  scale-[0.3] xs:scale-[0.4] sm:scale-[0.5] md:scale-[0.6]">
                <Image
                  src={aboutimg3}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-[107px] h-full object-fill"
                />
              </div>
              <div
                className="-z-10 w-full"
                style={{ transform: " translateX(0px) translateZ(0px)" }}
              >
                <Image
                  src={''}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-[107px] h-full object-fill"
                />
               </div>
              <div className="relative w-full">
                <div className="absolute animate-scale-in-out -right-10 -top-3 xs:-right-16 sm:-right-24   lg:-right-32 lg:-top-6">
                  <Image
                    src={aboutimg5}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="-ml-14 scale-[0.4] xs:-ml-20 xs:scale-[0.5]  md:scale-[0.6] lg:scale-[0.8]">
                  <Image
                    src={aboutimg6}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit h-fit object-conver"
                  />
                </div>
                <div className="absolute animate-scale-in-out -bottom-[14px] -left-10 scale-[0.7] xs:-left-16 sm:-left-24 lg:-bottom-6  ">
                  <Image
                    src={aboutimg7}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                className="-z-10 w-full"
                style={{ transform: "tranlateX(0px) translateZ(0px" }}
              >
                {/* <Image
                  src={aboutimg5}
                  width={100}
                  height={10}
                  alt="image"
                  className="w-full h-full object-contain"
                /> */}
              </div>
              <div className=" relative  -left-4 w-full scale-[0.3] xs:-left-5  xs:scale-[0.4] sm:scale-[0.5] md:scale-[0.6]">
                <Image
                  src={aboutimg9}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-fit h-full object-contain"
                />
              </div>
            </div>
            <div className="relative self-end">
              <div className="absolute -top-36 right-10 hidden lg:flex ">
                <Image
                  src={aboutimg10}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-fit h-full object-contain"
                />
              </div>
              <div className="hidden lg:flex">
                <Image
                  src={aboutimg11}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
            <div className="mx-auto px-5">
              <ChallengeBox/>
            </div>
            <div className="my-20 mx-auto px-5">
              <HyringBox/>
            </div>
            <div className="px-5 md:px-10 aos-init aos-animate">
              <SpinComponent/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
