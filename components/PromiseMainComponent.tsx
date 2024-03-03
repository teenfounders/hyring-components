"use client";
import React, { useState, useEffect } from "react";
import PromiseComponent from "@/components/PromiseComponent";
import PricingCard from "@/components/PricingCard";
import redstar from "@/public/redstar.svg";
import pricesvg from "@/public/priceingsvg.svg";
import Image from "next/image";
import blue from "@/public/purplestar.svg";
import yello from "@/public/yello.svg";
import pricing from "@/public/price.svg";
type Props = {};

const PromiseMainComponent = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      className: "bg[#b6eccc]",
      title: "Explore Indian Talents",
      description: "Uncover top-notch skilled professionals from India.",
      image: pricesvg,
      startimage: redstar,
    },
    {
      className: "bg-[#FFF5B7]",
      title: "Fill Open Positions Within 15 Days",
      description:
        "Ensure minimal disruption to your projects with our swift staffing solutions.",
      image: pricesvg,
      startimage: blue,
    },
    {
      className: "bg-[#B9C8FF]",
      title: "Save Up to 50% on Staffing Costs",
      description: "Reduce expenses without compromising on resource quality.",
      image: pricesvg,
      startimage: yello,
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
    <div className="mb-10  flex h-full z-50  justify-evenly min-h-[500px]  flex-col items-center  lg:mt-0 lg:min-h-[700px]   ">
      <div className=" font-WhyteInktrap-medium  text-start  flex  text-[2rem] text-primary-brown sm:text-[2.25rem] md:text-[2.5rem]  lg:text-5xl">
        Our Promises
      </div>

      <div className="w-full  flex min-h-[500px]   overflow-hidden  justify-center ">
        <div className="max-w-screen-lg relative h-full flex basis-3/5  left-0 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full absolute top-10 inset-0 h-full transition-opacity duration-500 ${
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
                startimage={slide.startimage}
                image1={slide.image}
              />
            </div>
          ))}
        </div>

        <div className="  w-full   relative h-full basis-2/5  ">
          <ul
            className="slick-dots last:slick slick-thumb"
            style={{ display: "block" }}
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`${
                  index === activeIndex ? "slick-active " : ""
                } flex justify-between my-10 `}
              >
                <div className="flex gap-5 xl3:gap-7">
                  <div
                    onClick={() => setActiveIndex(index)}
                    className="undefined cursor-pointer relative"
                  >
                    <div
                      className={` ${
                        index !== slides.length - 1
                          ? "before:border-dashed"
                          : "before:border-none"
                      } before:content-[''] z-30 
                       before:w-[20px] before:left-[35px]
                        md:before:w-0 
                        md:before:h-[65px] 
                        before:border
                         before:border-black 
                         before:absolute 
                         md:before:top-[35px]
                          lg:before:top-[50px]
                           xl:before:top-[60px]
                           md:before:left-[50%]
                              w-[35px]
                               h-[35px]
                                lg:w-[50px]
                                 lg:h-[50px]
                                  xl:w-[60px] 
                                  xl:h-[60px]  
                                  
                                  transition font-primaryMedium 
                                  text-lg lg:text-2xl xl4:text-[33px] 
                                  duration-500 border rounded-[44px]
                                   border-primary-brown 
                                   flex 
                                   justify-center 
                                   items-center
                                   ${index ===activeIndex && index ===0 ?`bg-[#b6eccc]`:''}
                                    relative  ${
                                      index === activeIndex
                                        ? `${slide.className}`
                                        : "bg-[#FFF9F3]"
                                    } ${
                        index !== slides.length - 1
                          ? "before:border-dashed"
                          : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                   


                    <div
                      className="w-[35px] -z-10  h-[35px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]   rounded-[44px] bg-primary-brown absolute"
                      style={{ left: "3px", top: "2px" }}
                    ></div>
                  </div>
                  <div
                    className={`${
                      index === activeIndex
                        ? "font-WhyteInktrap-medium font-semibold text-primary-brown"
                        : ""
                    } mt-1.5 hidden whitespace-nowrap text-left font-primary text-base transition duration-1000 md:block lg:mt-3 lg:text-lg xl:text-xl xl3:mt-3.5 xl3:text-2xl xl4:mt-51`}
                  >
                    {slide.title}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PromiseMainComponent;
