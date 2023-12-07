import React from "react";
import backarrow from "@/public/backarrow.svg";
import modalsvg from "@/public/modalemploye.svg";
import Image from "next/image";
import BoxInput from "./BoxInput";
import { useModalStore } from "@/hooks/useModalFeature";
type Props = {
  setShow?: () => void;
};

const Employee = ({}: Props) => {
  const { show, setShow } = useModalStore();
  return (
    <div className="flex w-full   flex-col  items-center justify-center pb-3 pt-0 sm:py-6">
      <div className="relative h-fit w-full ">
        <div className="absolute  left-0 -translate-y-[100%] sm:left-8">
          <div
            onClick={() => setShow("")}
            className="flex cursor-pointer items-center gap-2 text-sm font-bold capitalize text-primary-brown md:text-[16px]"
          >
            <div className="scale-[0.8] md:scale-[1]">
              <Image
                src={backarrow}
                width={50}
                height={50}
                className="w-fit object-cover h-full"
                alt="image"
              />
            </div>
            Back
          </div>
        </div>
        <h1 className="flex items-center  justify-center gap-1 text-center font-primaryBold  text-[1.5rem] font-medium text-primary-brown md:gap-2 md:text-[2rem] lg:gap-3 lg:text-[2.5rem] 2xl:gap-4 2xl:text-[3.125rem]">
          Employee
        </h1>
        <h3 className="mb-[0.55rem] mt-[0.8rem] text-center font-primary font-normal    text-primary-brown xxs:mt-[0.95rem] md:mb-[0.75rem] md:mt-[1.25rem] md:text-[1.25rem] lg:mb-[1.06rem] lg:mt-[1.75rem] lg:text-[1.5rem] 2xl:text-[1.625rem]">
          December registrations are open for
        </h3>
        <div className="flex-center  mx-auto w-full max-w-[500px] flex-1 md:px-2">
          <div className="w-full xl:w-[500px]  ">
            <div className="flex flex-grow items-center  justify-around    gap-2 font-primary font-normal text-secondary-color">
              <div className="flex flex-col   items-center gap-2">
                <div className="flex-center  h-[3rem]  rounded-md border-[1.9px] border-[#462b34] bg-[#FFF7EF]      px-4 text-[1.4rem] sm:h-[4rem] md:px-5 md:text-[1.8rem] lg:text-[2.1rem] 2xl:px-6 2xl:text-[2.5rem]  ">
                  24
                </div>
                <h4 className="text-[#A0858E]">Days</h4>
              </div>
              <div className="flex flex-col   items-center gap-2">
                <div className="flex-center  h-[3rem]  rounded-md border-[1.9px] border-[#462b34] bg-[#FFF7EF]      px-4 text-[1.4rem] sm:h-[4rem] md:px-5 md:text-[1.8rem] lg:text-[2.1rem] 2xl:px-6 2xl:text-[2.5rem]  ">
                  8
                </div>
                <h4 className="text-[#A0858E]">Hours</h4>
              </div>
              <div className="flex flex-col   items-center gap-2">
                <div className="flex-center  h-[3rem]  rounded-md border-[1.9px] border-[#462b34] bg-[#FFF7EF]      px-4 text-[1.4rem] sm:h-[4rem] md:px-5 md:text-[1.8rem] lg:text-[2.1rem] 2xl:px-6 2xl:text-[2.5rem]  ">
                  24
                </div>
                <h4 className="text-[#A0858E]">Minutes</h4>
              </div>
              <div className="flex flex-col   items-center gap-2">
                <div className="flex-center  h-[3rem]  rounded-md border-[1.9px] border-[#462b34] bg-[#FFF7EF]      px-4 text-[1.4rem] sm:h-[4rem] md:px-5 md:text-[1.8rem] lg:text-[2.1rem] 2xl:px-6 2xl:text-[2.5rem]  ">
                  24
                </div>
                <h4 className="text-[#A0858E]">Seconds</h4>
              </div>
            </div>
            <div className="flex-center mt-[2rem] group md:mt-[3.2rem] lg:mt-[3.6rem] xl2:mt-[4.44rem] ">
              <button className="w-full transform-none hover:scale-105">
                <div className="h-full w-full cursor-pointer   relative  ">
                  <div className="w-full  h-[2.35rem] md:h-[3rem] xl2:h-[3.625rem]  button-hover border bg-[#FFB65E] rounded-[4px] border-primary-brown  flex justify-center items-center relative z-10 ">
                    <div className="flex items-center gap-1   ">
                      <div className="  mr-[0.62rem] font-primaryMedium text-[0.9rem] font-medium md:text-[1.25rem] lg:text-[1.4rem] xl2:text-[1.625rem]  ">
                        Get Access
                      </div>
                    </div>
                    <div className="w-full  h-[2.35rem] md:h-[3rem]   opacity-0   2xl:h-[3.625rem] duration-300  border-2 rounded-[4px] bg-secondary-color  custom-bg border-primary-brown   absolute  "></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-[550px] items-center justify-center px-5 md:px-9">
          <h6 className="flex gap-4 text-justify font-primary text-sm font-normal text-primary-brown md:text-base">
            {/* <div className=""> */}
            <Image
              src={modalsvg}
              width={50}
              height={50}
              className="w-fit object-cover h-full"
              alt="image"
            />
            {/* </div> */}
            Available for a Short Window Each Month, Ensuring the Equilibrium of
            Demand and Supply.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Employee;
