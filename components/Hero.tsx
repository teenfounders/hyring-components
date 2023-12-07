import React from "react";
import Image from "next/image";
import arrow from "@/public/navbar-hyting.svg";
import circle from "@/public/circle-hyring.svg";
import buttonarrow from "@/public/buttonarrow.svg";
import heroimage from "@/public/heroimage.svg";
import img1 from "@/public/1.svg";
import img2 from "@/public/2.svg";
import img3 from "@/public/3.svg";
import img4 from "@/public/4.svg";
import img5 from "@/public/5.svg";
import img6 from "@/public/6.svg";
import img7 from "@/public/7.svg";
import img8 from "@/public/8.svg";
import img9 from "@/public/9.svg";
import img11 from "@/public/11.svg";
import img12 from "@/public/12.svg";
import img13 from "@/public/13.svg";
import img14 from "@/public/14.svg";
import img15 from "@/public/15.svg";

import spnner from "@/public/spin.svg";
import spnewnner from "@/public/new.svg";
import greenstart from "@/public/greendothero.svg";
import Marquee from "react-fast-marquee";
import MainMarquee from "./MainMarquee";
type Props = {};
let marqueeItems = [
  { image: img1, name: "System Designer" },
  { image: img2, name: "Full Stack Engineer" },
  { image: img3, name: "Front-End Engineer" },
  { image: img4, name: "Back-End Engineer" },
  { image: img5, name: "Data Engineer" },
  { image: img6, name: "Social Media Marketer" },
  { image: img7, name: "DevOps" },
  { image: img13, name: "Mobile Engineer" },
  { image: img12, name: "UI/UX Engineer" },
];
const Hero = (props: Props) => {
  return (
    <div className="mt-3  max-w-[100vw] md:mt-20 ">
      <div className="mx-auto mb-20 w-[92vw]">
        <div className="mx-auto my-0 flex max-w-[1800px] flex-col lg:flex-row">
          <div className="basis-3/5 ">
            <h1 className="text-center text-primary-brown   font-WhyteInktrap-medium text-4xl lg:whitespace-nowrap lg:text-start  lg:text-[44px] xl:text-5xl 2xl:text-6xl">
              Meet The New Gold Standard
              <br className="hidden lg:block" />
              <span>In </span>
              <span className="text-secondary-orange">Contract Hyring</span>
            </h1>
            <div className="mb-8  mt-5 text-center font-WhyteInktrap-regular text-xl  font-normal lg:mb-[60px] lg:mt-[40px] lg:text-start lg:text-3xl">
              Hire from a pool of
              <p className="relative mx-2 inline-block lg:mx-3">
                <span className="absolute -left-[22px] -top-4 scale-[0.7] lg:-left-1 lg:-top-3 lg:scale-[1]  ">
                  <Image
                    src={circle}
                    width={100}
                    className="w-fit h-fit"
                    height={100}
                    alt={"image"}
                  />
                </span>
                vetted
              </p>
              candidates.
            </div>
            <div className="mb-6 flex flex-wrap items-center  justify-center gap-4 font-medium text-base sm:mb-[50px] lg:w-[750px] lg:flex-nowrap lg:justify-start xl:text-lg">
              Looking for
              <div className="h-fit undefined w-fit cursor-pointer text-base  xl:text-lg font-primaryMedium     relative  ">
                <div className="w-fit h-[45px] md:h-[57px] border bg-white rounded-[8px] border-primary-brown flex justify-center items-center relative z-1 ">
                  <div className=" pl-[21px] pr-4 flex justify-between items-center gap-2">
                    <div className="text-custom-grey">Job</div>
                    <div className="md:block hidden">
                      {/* here come the swithc board */}
                    </div>
                    <div className="md:hidden">
                      {/* here come the swithc board */}
                    </div>
                    <div className=" text-quaternary-color ">Candidates</div>
                  </div>
                </div>
                <div
                  className="w-full -z-10 h-[45px] md:h-[57px] rounded-[8px]  bg-primary-brown    absolute  "
                  style={{ left: "4px", top: "5px" }}
                ></div>
              </div>
              <Image
                src={arrow}
                width={100}
                className="w-fit h-fit"
                height={100}
                alt={"image"}
              />
              <div className="flex items-center gap-4 whitespace-nowrap">
                <div className="h-fit undefined w-fit cursor-pointer     relative  ">
                  <div className="w-fit  h-[45px] md:h-[57px] border bg-white rounded-[8px] border-primary-brown flex justify-center items-center relative z-1 ">
                    {/* something about the mui input field */}
                    <div className="text-[1rem] leading-[1.5rem] w-fit text-base xl:text-lg ">
                      <div className="">
                        <div className="leading-[2rem] text-ellipsis px-[10px]  MuiInputBase-colorPrimary  w-[230px] ">
                          <input
                            type="text"
                            className="outline-none w-full h-full "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-full -z-10 h-[45px] md:h-[57px] rounded-[8px]  bg-primary-brown    absolute  "
                    style={{ left: "4px", top: "5px" }}
                  ></div>{" "}
                </div>
                <button className="">
                  <div className="h-fit undefined w-fit cursor-pointer  relative  ">
                    {/* <div className="w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 "> */}
                    <div className="w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange bg-[#FFB65E] rounded-[8px] border-primary-brown flex justify-center items-center relative  ">
                      <div className="">
                        <Image
                          src={buttonarrow}
                          width={100}
                          className="w-fit h-fit"
                          height={100}
                          alt={"image"}
                        />
                      </div>
                    </div>
                    <div
                      className="w-full -z-10 h-[45px] md:h-[57px] rounded-[8px]  bg-primary-brown    absolute  "
                      style={{ left: "4px", top: "5px" }}
                    ></div>{" "}
                  </div>
                </button>
              </div>
            </div>
            <div className="max-lg:hidden lg:block   justify-center my-4 lg:max-w-[650px] xl:max-w-[860px] 2xl:max-w-[860px]">
              {/* <div className="md:hidden lg:block flex justify-center my-4 lg:max-w-[650px] xl:max-w-[860px] 2xl:max-w-[860px]"> */}
              <div className="sm:grid  w-full sm:grid-cols-2 items-start  ">
                <div className="">
                  <div
                    className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={20}
                        className="w-fit h-fit"
                        height={20}
                        alt={"image"}
                      />
                    </div>
                    <div className="">AI-Powered Hyring App </div>
                  </div>
                  <div
                    className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={20}
                        className="w-fit h-fit"
                        height={20}
                        alt={"image"}
                      />
                    </div>
                    <div className="">Salaries up to ₹1 Crore </div>
                  </div>
                  <div
                    className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={20}
                        className="w-fit h-fit"
                        height={20}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Health Insurance for the Entire Family{" "}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div
                    className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={20}
                        className="w-fit h-fit"
                        height={20}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Transparent Salary Info.- No Hanky-Panky{" "}
                    </div>
                  </div>
                  <div
                    className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={20}
                        className="w-fit h-fit"
                        height={20}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Indian Taxation & Compliance Covered{" "}
                    </div>
                  </div>
                  <div
                    className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                  >
                    <div className="">
                      <Image
                        src={greenstart}
                        width={20}
                        className="w-fit h-fit"
                        height={20}
                        alt={"image"}
                      />
                    </div>
                    <div className="">
                      Cool Office Spaces Located Across India{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* leaving the space to put the animation down */}
          <div className=" bg-green -mt-5 flex w-full basis-2/5 items-center  justify-center lg:-mt-20  xl4:-mt-40 ">
            <div className="relative h-[400px]  xs:h-[500px] lg:h-auto   xl:h-[500px] 2xl:h-[550px] 4xl:h-[620px] ">
              <div className="h-full w-full">
                <div
                  title=""
                  role="button"
                  aria-label="animation"
                  tabIndex={0}
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    margin: "0px auto",
                    outline: "none",
                  }}
                  className=""
                >
                  <Image
                    src={spnewnner}
                    className="w-full h-full"
                    width={100}
                    height={100}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* below animation section */}
          <div className=" lg:hidden flex justify-center my-4 lg:max-w-[650px] xl:max-w-[860px] 2xl:max-w-[860px]">
            <div className="sm:grid  sm:grid-cols-2 items-start  ">
              <div className="">
                <div
                  className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                >
                  <div className="">
                    <Image
                      src={greenstart}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div className="">AI-Powered Hyring App </div>
                </div>
                <div
                  className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                >
                  <div className="">
                    <Image
                      src={greenstart}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div className="">Salaries up to ₹1 Crore </div>
                </div>
                <div
                  className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                >
                  <div className="">
                    <Image
                      src={greenstart}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div className="">
                    Health Insurance for the Entire Family{" "}
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                >
                  <div className="">
                    <Image
                      src={greenstart}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div className="">
                    Transparent Salary Info. - No Hanky-Panky
                  </div>
                </div>
                <div
                  className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                >
                  <div className="">
                    <Image
                      src={greenstart}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div className="">Indian Taxation & Compliance Covered </div>
                </div>
                <div
                  className="font-WhyteInktrap-medium undefined whitespace-nowrap
       text-base sm:text-[14px] md:text-[17px] lg:text-[16px]   
         xl:text-[17px] 2xl:text-[20px]   flex items-center gap-1 my-5 xl:my-8"
                >
                  <div className="">
                    <Image
                      src={greenstart}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div className="">
                    Cool Office Spaces Located Across India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-screen">
        <div className="mx-auto h-[71px] min-w-full  -rotate-3 border border-primary-brown bg-primary-brown ">
          <div
            className="py-4 overflow-hidden flex flex-row relative w-full 
        "
          >
            <Marquee>
              <div className="flex flex-row min-w-full flex-grow-0 shrink-0 basis-auto">
                
                {marqueeItems.map((item: any, key: any) => {
                  return (
                    <div className="font-lg overflow-hidden mx-3 flex w-fit items-center gap-2 font-WhyteInktrap-regular font-normal text-white ">
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        alt="image"
                        className="w-fit object-contain h-fit"
                      />
                      <span className="">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </div>  */}
      <MainMarquee />
    </div>
  );
};

export default Hero;
