"use client";
import React, { useState, useEffect } from "react";
import PromiseComponent from "@/components/PromiseComponent";
import PricingCard from "@/components/PricingCard";
import pricesvg from "@/public/priceingsvg.svg";
import Image from "next/image";
import pricing from "@/public/price.svg";
type Props = {};

const PromiseMainComponent = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      className: "bg[#B6ECCC]",
      title: "Explore Indian Talents",
      description: "Uncover top-notch skilled professionals from India.",
      image: pricesvg,
    },
    {
      className: "bg-[#FFF5B7]",
      title: "Fill Open Positions Within 15 Days",
      description:
        "Ensure minimal disruption to your projects with our swift staffing solutions.",
      image: pricesvg,
    },
    {
      className: "bg-[#B9C8FF]",
      title: "Save Up to 50% on Staffing Costs",
      description: "Reduce expenses without compromising on resource quality.",
      image: pricesvg,
    },
    {
      className: "bg-[#FCB2B2]",
      title: "Access the Top 5% of Indian Resources",
      description:
        "Rest assured that your projects are in capable hands with our elite professionals.",
      image: pricesvg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mb-10  flex h-full  min-h-[500px] w-screen flex-col justify-center md:mt-8 lg:mt-0 lg:min-h-[700px]   ">
      <div className="flex items-center justify-center">
        <div className=" font-primaryBold text-[2rem] text-primary-brown sm:text-[2.25rem] md:text-[2.5rem]  lg:text-5xl">
          Our Promise
        </div>
      </div>
      
      <div className="relative flex items-center w-full h-full justify-center">
      {/* <div className=" mt-0 w-full   flex  max-w-[1800px] justify-center     items-center md:my-20"> */}
        <div className="w-full flex">
          {/* <div className=" !h-[300px] md:max-w-[400px] lg:max-w-[700px] xl:max-w-[700px] 2xl:max-w-[800px] "> */}
          {/* <div className="relative min-w-full flex flex-row items-center h-full gap-10 justify-start slick-slider  "> */}
          <div className="max-w-screen-lg relative flex  left-0 w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0   left-0 w-full h-full transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  pointerEvents: index === activeIndex ? "auto" : "none",
                }}
              >
                <PromiseComponent
                  title={slide.title}
                  description={slide.description}
                  className={slide.className}
                  image1={slide.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="">hi hwllo</div>
        {/* <div className=" relative w-full z-0 flex items-center h-full justify-center">
        <ul
          className="slick-dots pt-20 relative slick-thumb"
          style={{ display: "block" }}
        >
          <li className="">
            <div className="flex  gap-5 xl3:gap-7">
              <div className="undefined  relative  ">
                <div
                  className="   before:content-[''] before:border-dashed before:w-[20px] before:left-[35px]  md:before:w-0 md:before:h-[65px]  before:border before:border-black before:absolute
                 md:before:top-[35px] lg:before:top-[50px] xl3:before:top-[60px] xl4:before:top-[70px]  md:before:left-[50%] 
              bg-[#FFF9F3]
            w-[35px]  h-[35px]  lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px] transition font-primaryMedium text-lg lg:text-2xl xl4:text-[33px]  duration-500 border    rounded-[44px] border-primary-brown  flex justify-center items-center relative z-1 "
                >
                  1
                </div>
                <div
                  className="w-[35px]  h-[35px] lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px]  -z-10  rounded-[44px]  bg-primary-brown    absolute  "
                  style={{ left: "3px", top: "2px" }}
                ></div>
              </div>
              <div
                className="
             
          mt-1.5 hidden whitespace-nowrap  text-left font-primary text-base transition duration-1000 md:block lg:mt-3 lg:text-lg xl:text-xl xl3:mt-3.5 xl3:text-2xl xl4:mt-5 "
              >
                Explore Indian Talents
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex  gap-5 xl3:gap-7">
              <div className="undefined  relative  ">
                <div
                  className="   before:content-[''] before:border-dashed before:w-[20px] before:left-[35px]  md:before:w-0 md:before:h-[65px]  before:border before:border-black before:absolute
                 md:before:top-[35px]  lg:before:top-[50px] xl3:before:top-[60px] xl4:before:top-[70px]  md:before:left-[50%] 
              bg-[#FFF9F3]
            w-[35px]  h-[35px]  lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px] transition font-primaryMedium text-lg lg:text-2xl xl4:text-[33px]  duration-500 border    rounded-[44px] border-primary-brown  flex justify-center items-center relative z-1 "
                >
                  2
                </div>
                <div
                  className="w-[35px] -z-10 h-[35px] lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px]    rounded-[44px]  bg-primary-brown    absolute  "
                  style={{ left: "3px", top: "2px" }}
                ></div>
              </div>
              <div
                className="
             
          mt-1.5 hidden whitespace-nowrap  text-left font-primary text-base transition duration-1000 md:block lg:mt-3 lg:text-lg xl:text-xl xl3:mt-3.5 xl3:text-2xl xl4:mt-5 "
              >
                Fill Open Positions Within 15 Days
              </div>
            </div>
          </li>
          <li className="">
            <div className="flex  gap-5 xl3:gap-7">
              <div className="undefined  relative  ">
                <div
                  className="   before:content-[''] before:border-dashed before:w-[20px] before:left-[35px]  md:before:w-0 md:before:h-[65px]  before:border before:border-black before:absolute
                 md:before:top-[35px] lg:before:top-[50px] xl3:before:top-[60px] xl4:before:top-[70px]  md:before:left-[50%] 
              bg-[#FFF9F3]
            w-[35px]  h-[35px]  lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px] transition font-primaryMedium text-lg lg:text-2xl xl4:text-[33px]  duration-500 border    rounded-[44px] border-primary-brown  flex justify-center items-center relative z-1 "
                >
                  3
                </div>
                <div
                  className="w-[35px] -z-10 h-[35px] lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px]    rounded-[44px]  bg-primary-brown    absolute  "
                  style={{ left: "3px", top: "2px" }}
                ></div>
              </div>
              <div
                className="
             
          mt-1.5 hidden whitespace-nowrap  text-left font-primary text-base transition duration-1000 md:block lg:mt-3 lg:text-lg xl:text-xl xl3:mt-3.5 xl3:text-2xl xl4:mt-5 "
              >
                Save Up to 50% on Staffing Costs
              </div>
            </div>
          </li>
          <li className="slick-active">
            <div className="flex  gap-5 xl3:gap-7">
              <div className="undefined  relative  ">
                <div
                  className="
              bg-custom-red
            w-[35px]  h-[35px]  lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px] transition font-primaryMedium text-lg lg:text-2xl xl4:text-[33px]  duration-500 border    rounded-[44px] border-primary-brown  flex justify-center items-center relative z-1 "
                >
                  4
                </div>
                <div
                  className="w-[35px] -z-10 h-[35px] lg:w-[50px] lg:h-[50px] xl3:w-[60px] xl3:h-[60px] xl4:w-[70px] xl4:h-[70px]    rounded-[44px]  bg-primary-brown    absolute  "
                  style={{ left: "3px", top: "2px" }}
                ></div>
              </div>
              <div
                className="
             font-primaryBold
          mt-1.5 hidden whitespace-nowrap  text-left font-primary text-base transition duration-1000 md:block lg:mt-3 lg:text-lg xl:text-xl xl3:mt-3.5 xl3:text-2xl xl4:mt-5 "
              >
                Access the Top 5% of Indian Resources
              </div>
            </div>
          </li>
        </ul>
      </div> */}
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default PromiseMainComponent;
