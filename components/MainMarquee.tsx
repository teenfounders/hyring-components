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

const MainMarquee = (props: Props) => {
  return (
    <div className="w-screen">
      <div className="mx-auto h-[71px] min-w-full  -rotate-3 border border-primary-brown bg-primary-brown ">
        <div
          className="py-4 overflow-hidden flex flex-row relative w-full 
        "
        >
          <Marquee>
            <div className="flex flex-row min-w-full flex-grow-0 shrink-0 basis-auto">
              {/* <div className="font-lg mx-3 flex w-fit items-center gap-2 font-WhyteInktrap-regular font-normal text-white ">
                  <Image
                    src={img1}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit h-fit"
                  />
                  <span className="">System Designer</span>
                </div> */}
              {marqueeItems.map((item: any, key: any) => {
                return (
                  <div
                    key={item}
                    className="font-sm overflow-hidden mx-3 flex w-fit items-center gap-2 font-WhyteInktrap-regular font-normal text-white "
                  >
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
    </div>
  );
};

export default MainMarquee;
