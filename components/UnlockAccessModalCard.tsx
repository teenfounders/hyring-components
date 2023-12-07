"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logo1 from "@/public/navbar-hyting.svg";

import img1 from "@/public/yello.svg";
import img2 from "@/public/purplestar.svg";
import img3 from "@/public/redstar.svg";
import img4 from "@/public/greenstar.svg";
import Button from "./Button";
import JobSeeker from "./JobSeeker";
import { useModalStore } from "@/hooks/useModalFeature";
import Employee from "./Employee";
type Props = {};
let marqueeItems = [
  { image: img1, name: "System Designer" },
  { image: img2, name: "Full Stack Engineer" },
  { image: img3, name: "Front-End Engineer" },
  { image: img2, name: "Back-End Engineer" },
];
const UnlockAccessModalCard = (props: Props) => {
  const { show, setShow } = useModalStore();

  return (
    <div className="w-full h-full   items-center justify-center flex flex-col ">
      <div className="flex-center mb-0 h-fit w-full rounded-t-[0.35rem] bg-secondary-color font-primary text-[1.25rem] text-white  md:text-[1.75rem] lg:text-[2rem]  2xl:text-[2.5rem]">
        <Marquee>
          <div className="flex flex-row min-w-full flex-grow-0 items-center justify-center  shrink-0 basis-auto">
            {marqueeItems.map((item: any, key: any) => {
              return (
                <div
                  key={item}
                  className="font-lg overflow-hidden mx-3 flex w-fit items-center gap-2 font-WhyteInktrap-regular font-normal text-white "
                >
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="image"
                    className="w-fit object-contain h-fit"
                  />
                  <span className="xl:text-[2.5rem] lg:text-[2rem] md:text-[1.75rem] text-[1.25rem]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
      <div className="flex-center mx-auto h-full w-[90%] sm:w-full">
        {show == "" && (
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-center text-[2.375rem] font-bold text-primary-brown md:text-[48px]">
              Sign up as
            </h1>
            <div className="mx-auto mt-2 flex w-[90%] flex-col gap-5 sm:w-[80%]">
              <Button
                onClick={() => setShow("jobseeker")}
                text="Job Seeker"
                className=" outline-none bg-custom-blue"
              />

              <Button
                text="Employee"
                onClick={() => setShow("employee")}
                className="bg-[#b6eccc]"
              />
            </div>
          </div>
        )}
        {show == "jobseeker" && (
          <div className=" w-full relative h-full flex justify-start ">
            <JobSeeker />
          </div>
        )}
        {show == "employee" && (
          <div className="w-full relative h-full flex justify-start">
            <Employee />
          </div>
        )}
      </div>
    </div>
  );
};

export default UnlockAccessModalCard;
