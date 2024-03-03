"use cilent";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo hyring.svg";
import logo1 from "@/public/navbar-hyting.svg";
import React, { useState } from "react";
import useUnlockAccessModal from "@/hooks/useUnlockAccessModal";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  const unlockAccessModal = useUnlockAccessModal();
  const path = useSelectedLayoutSegment()
  console.log(path)
  const handlebar = () => {
    console.log("cliecdlk");
    setShow((prev) => !prev);
  };
  const onclick = () => {
    console.log("cliecked");
    unlockAccessModal.onOpen();
  };
  return (
    <div className="pt-[14px]">
      <div className="undefined mx-auto h-[67px] w-fit md:h-[102px]   relative  ">
        {/* <div className="md:h-[102px] w-fit h-[67px] mx-auto relative"> */}
        <div className="w-[95vw] h-[63px] md:h-[93px] border-2 bg-custom-bg rounded-[10px] border-primary-brown 2xl:max-w-[1800px] 2xl:mx-auto 2xl:my-0 flex justify-center items-center relative z-1 ">
          {/* <div className="md:h-[93px] bg-custom-bg border-primary-brown border-[2px] rounded-[10px] justify-center items-center w-[95vw] flex z-10 relative"> */}
          <div className="flex w-full  items-center justify-between px-5 font-WhyteInktrap-medium text-[17px] md:px-8 xl:px-10 xl:text-xl     ">
            {/* <div className="md:px-8 text-[17px] px-5 justify-between items-center w-full flex"> */}
            <div className="-ml-7 scale-[0.6] md:scale-[0.8] xl:-ml-0 xl:scale-[1] ">
              <Link href={"/"}>
                <div className="">
                  <Image
                    src={logo}
                    className="w-fit h-fit"
                    width={100}
                    height={100}
                    alt="image"
                  />
                </div>
              </Link>
            </div>
            <div className="md:flex gap-8 items-center hidden xl:gap-10 ">
              <Link
                href={"/about-us"}
                className={`btn relative   text-inherit decoration-inherit`}
              >
                <p className={`inline-block ${path === 'about-us'?"btn-active ":""} relative m-0`}>About Us</p>
              </Link>
              <Link href={"/pricing"} className="btn text-inherit decoration-inherit">
                <p className="inline-block relative m-0">Pricing</p>
              </Link>
              <Link href={"#"} className="btn text-inherit decoration-inherit">
                <p className="inline-block relative m-0">Contact Us</p>
              </Link>
            </div>
            <div className="flex items-center gap-8 ">
              <div className="hidden items-center gap-5 md:flex xl:gap-10 2xl:gap-8">
                <Link
                  href={"#"}
                  className="group text-inherit decoration-inherit"
                >
                  <div className="w-full cursor-pointer md:w-[5rem] xl:h-[57px] relative">
                    <div className="w-full z-10 px-5  md:px-0 md:w-[5rem]  h-[44px] xl:h-[52px] border bg-white button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative z-1 ">
                      <div className="flex items-center gap-1">
                        <div className="mr-1 font-WhyteInktrap-regular text-lg md:text-lg">
                          Login
                        </div>
                      </div>
                    </div>
                    <div className="w-full  top-1 left-1 opacity-0 group-hover:opacity-100  md:w-[5rem] h-[44px] xl:h-[52px] border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  " />
                  </div>
                  {/* <div className="w-full h-full opacity-0 group-hover:opacity-100 top-[6px] left-[6px] -z-10 rounded-[10px]  duration-500 delay-100 bg-primary-brown   absolute  "></div> */}
                </Link>
                <div>
                  <div className="relative">
                    <div className="w-full group cursor-pointer xl:h-[57px] relative">
                      <div className="w-full btn-anim z-10 px-5 md:px-0 md:w-[13rem] h-[44px] xl:h-[52px] border bg-[#FFB65E] animate-glow rounded-[4px] border-primary-brown flex justify-center items-center relative z-1 ">
                        <div className="flex items-center relative  gap-1">
                          <div
                            onClick={onclick}
                            className="mr-1 font-medium text-lg btn-anim   md:text-lg"
                          >
                            Unlock Access
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
                        {/* <div className="w-full  md:w-[13rem] h-[44px] opacity-0 group-hover:opacity-100 top-[6px] left-[6px] -z-10 rounded-[10px]  duration-500 delay-100 bg-primary-brown   absolute  "></div> */}
                        {/* <div className="w-full opacity-0  xl:h-[52px] border-2 rounded-[4px] duration-300   custom-bg border-primary-brown top-1 left-1 group-hover:opacity-100 group-hover:-z-50   absolute  "></div> */}
                      </div>
                      <div className="w-full md:w-[13rem] top-1 left-1 opacity-0 group-hover:opacity-100  h-[44px] xl:h-[52px] border-2 rounded-[4px] duration-300   custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <div className="w-full group cursor-pointer xl:h-[57px]  relative  ">
                    <div className="w-full px-5 md:px-0 md:w-[13rem]   h-[44px] xl:h-[52px] border bg-[#FFB65E] animate-glow rounded-[4px] border-primary-brown flex justify-center items-center relative z-50 ">
                      <div className="flex items-center gap-1">
                        <div className="mr-1 font-medium text-lg md:text-lg">
                          Unlock Access
                        </div>
                        <div className="">
                          <Image
                            src={logo1}
                            className="w-fit h-fit"
                            width={100}
                            height={100}
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="w-full opacity-0 md:w-[13rem] h-[44px] xl:h-[52px] border-2 rounded-[4px] duration-300   custom-bg border-primary-brown top-1 left-1 group-hover:opacity-100 group-hover:-z-50   absolute  "></div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-[2px] border border-primary-brown bg-custom-green md:hidden  ">
                <div
                  onClick={() => handlebar()}
                  className={` ${
                    show
                      ? "rotate-45 delay-[200ms] duration-300 ease-in-out"
                      : ""
                  } `}
                >
                  <span
                    className={`${
                      show
                        ? "block h-[2px] w-[17px] bg-primary-brown duration-200 ease-in-out translate-y-[6px] delay-100"
                        : "block h-[2px] w-[17px] bg-primary-brown duration-200 ease-in-out "
                    }`}
                  ></span>
                  <span
                    className={`${
                      show
                        ? " my-1 block h-[2px] origin-center bg-primary-brown duration-200 ease-in-out w-[0px]"
                        : " my-1 block h-[2px] origin-center bg-primary-brown duration-200 ease-in-out w-[17px]"
                    } `}
                  ></span>
                  <span
                    className={`${
                      show
                        ? "block h-[2px] w-[17px] bg-primary-brown duration-200  ease-in-out  -translate-y-[6px]  rotate-90 delay-100"
                        : "block h-[2px] w-[17px] bg-primary-brown duration-200  ease-in-out"
                    } `}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[63px] md:h-[93px] -z-10 rounded-[10px] bg-primary-brown    absolute  "
          style={{ left: "7px", top: "6px" }}
        ></div>
      </div>
      <div className="overflow-hidden">
        <div
          className={`${
            show
              ? "mx-auto   mt-4 w-[95vw] rounded-[10px]  border-primary-brown bg-custom-bg  px-6  border-2  py-8 opacity-100  duration-700  md:hidden"
              : "mx-auto   mt-4 w-[95vw] rounded-[10px]  border-primary-brown bg-custom-bg  px-6  border-0 py-0 opacity-0  duration-700  md:hidden"
          }`}
        >
          <div
            className={`${
              show
                ? "flex flex-col gap-6   font-primaryMedium text-lg   "
                : "hidden font-primaryMedium text-lg  "
            } `}
          >
            <Link href={"#"} className="text-inherit decoration-inherit">
              <p className="inline-block relative m-0">About Us</p>
            </Link>
            <Link href={"#"} className="text-inherit decoration-inherit">
              <p className="inline-block relative m-0">Pricing</p>
            </Link>
            <Link href={"#"} className="text-inherit decoration-inherit">
              <p className="inline-block relative m-0">Contact Us</p>
            </Link>
            <hr className="h-[2px]  w-full bg-black px-4 md:hidden " />
            <Link href={"/login"} className="md:hidden">
              <div className="w-full cursor-pointer  md:w-[5rem] xl:h-[57px]  relative  ">
                <div className="w-full px-5  md:px-0 md:w-[5rem]  h-[44px] xl:h-[52px] border bg-white button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative z-1 ">
                  <div className="flex items-center gap-1">
                    <div className="  mr-1 font-primaryMedium text-lg md:text-lg">
                      Login
                    </div>
                  </div>
                </div>
                {/* <div className="w-full md:w-[5rem] h-[44px] xl:h-[52px] border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div> */}
              </div>
            </Link>
            <Link href={"/"} className="md:hidden">
              <div className="w-full cursor-pointer xl:h-[57px]  relative  ">
                <div className="w-full px-5 md:px-0 md:w-[13rem] button-hover    h-[44px] xl:h-[52px] border bg-[#FFB65E] animate-glow rounded-[4px] border-primary-brown flex justify-center items-center relative z-1 ">
                  <div onClick={onclick} className="flex items-center gap-1">
                    <div className="  mr-1 font-medium text-lg md:text-lg">
                      Unlock Access
                    </div>
                    <div className="">
                      <Image
                        src={logo1}
                        className="w-fit h-fit"
                        width={100}
                        height={100}
                        alt="image"
                      />
                    </div>
                  </div>
                  {/* <div className="w-full md:w-[13rem] h-[44px] xl:h-[52px] border-2 rounded-[4px] duration-300   custom-bg border-primary-brown    absolute  "></div> */}
                </div>
                {/* <div className="w-full md:w-[13rem] h-[44px] xl:h-[52px] border-2 rounded-[4px] duration-300   custom-bg border-primary-brown    absolute  "></div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
