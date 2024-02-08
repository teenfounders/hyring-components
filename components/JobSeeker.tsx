import React from "react";
import backarrow from "@/public/backarrow.svg";
import Image from "next/image";
import BoxInput from "./BoxInput";
import { useModalStore } from "@/hooks/useModalFeature";
type Props = {
  setShow?: () => void;
};

const JobSeeker = ({}: Props) => {
  const { show, setShow } = useModalStore();

  const onOtpSubmit =(otp:string)=>{
console.log(otp)
  }
  
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
 
  }
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
          Job Seaker
        </h1>
        <h3 className="mb-[0.55rem] mt-[0.8rem] text-center font-primary font-normal    text-primary-brown xxs:mt-[0.95rem] md:mb-[0.75rem] md:mt-[1.25rem] md:text-[1.25rem] lg:mb-[1.06rem] lg:mt-[1.75rem] lg:text-[1.5rem] 2xl:text-[1.625rem]">
          Enter your exclusive access code
        </h3>
        <div className="flex-center  mx-auto w-full max-w-[500px] flex-1 md:px-2">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between w-full h-full gap-[10px]">
              <BoxInput length={6} onOtpSubmit={onOtpSubmit}/>
            
            </div>
            <div className="flex-center mt-[2rem] group md:mt-[3.2rem] lg:mt-[3.6rem] xl2:mt-[4.44rem] ">
              <button type='submit' className="w-full transform-none hover:scale-105">
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
            <div className="mt-10 text-center">
              <p className="font-400 text-[18px]">
                Don&apos;t have an access code?
                <span className="cursor-pointer font-medium text-quaternary-color">
                  Join WaitList
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="mx-auto mt-8 flex max-w-[550px] items-center justify-center px-5 md:px-9">
          <h6 className="flex gap-4 text-justify font-primary text-sm font-normal text-primary-brown md:text-base"></h6>
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
