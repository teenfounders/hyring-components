import React from "react";
import logo from "@/public/logo hyring.svg";
import imagearrow from "@/public/footerimg1.svg";
import Image from "next/image";
import footerarrow from "@/public/footerimg1.svg";
import avatarthree from "@/public/avatarthree.png";
import circle from "@/public/circleyello.svg";
import circlegreen from "@/public/circlegreen.svg";
import hoverstar from "@/public/hoverstar.svg";

import Link from "next/link";
import FootarCard from "./FootarCard";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="">
      {/* there is another dive to applied here */}
      <div className="my-10 flex flex-col gap-5 px-10 font-WhyteInktrap-regular md:hidden">
        <div className="undefined group footer_adjust cursor-pointer  xl:w-[40%]  relative  ">
          <div className="item-start   border-2 bg-white  border-primary-brown bg-custom-green  rounded-lg   w-full flex justify-start items-center relative z-10 ">
            <div className="flex flex-col items-start   gap-2 px-2 py-8 md:px-5 md:py-12">
              <div className="flex flex-row-reverse">
                <div className="-mr-2">
                  <Image src={avatarthree} width={40} height={40} alt="image" />
                </div>
                <div className="-mr-2">
                  <Image src={avatarthree} width={40} height={40} alt="image" />
                </div>
                <div className="-mr-2">
                  <Image src={avatarthree} width={40} height={40} alt="image" />
                </div>
              </div>
              <div className="pr-10  ">
                <div className="text-medium  text-lg md:text-2xl lg:text-[26px] ">
                  I&apos;m a Job Seeker, Let&apos;s work together!
                </div>
                <p className="mt-1 font-WhyteInktrap-regular  ">
                  Invitation-only exclusive access
                </p>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100  -left-8 -top-8 scale-[.7] lg:scale-[0.9] ">
                <Image
                  src={hoverstar}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-fit group-hover:animate-spin-slow h-fit"
                />
              </div>
            </div>
            <div className="absolute -right-10 scale-[0.7] md:-right-10 md:scale-[1]">
              <div className="h-fit w-fit">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="91"
                  height="92"
                  fill="none"
                  color="#FFF5B7"
                  style={{ transform: "none" }}
                >
                  <circle
                    cx="45.501"
                    cy="45.788"
                    r="45"
                    fill="#FFF5B7"
                    stroke="#462B34"
                  ></circle>
                  <circle
                    cx="45.501"
                    cy="45.788"
                    r="27"
                    stroke="#462B34"
                    fill="none"
                  ></circle>
                  <g fill="#462B34" clip-path="url(#clip0_3644_16241)">
                    <path
                      d="M57.766 16.109l3.001-6.89.976.45-3.001 6.89-.976-.45zM62.718 18.58l4.651-5.916.9.6-.524 6.739 3.45-4.418.901.674-4.651 5.915-.9-.674.524-6.739-3.45 4.418-.901-.599zM71.346 26.892l4.876-6.29.675.973-4.126 5.392 6.527-1.872.675.973-7.652 2.247-.975-1.423zM75.097 33.706l7.052-2.696.375 1.049-7.052 2.696-.375-1.049zM77.048 40.895l6.452-.824-.3-2.471 1.05-.15.75 6.066-1.05.15-.3-2.472-6.452.824-.15-1.123zM77.272 48.233l7.503 1.198-.75 4.793-1.05-.15.6-3.67-2.101-.299-.45 3.07-1.05-.15.45-3.07-2.326-.374-.525 3.594-1.05-.15.75-4.792zM71.196 64.033c.45-.599.975-1.048 1.5-1.273.6-.224 1.2-.3 1.8-.15.676.15 1.276.375 1.951.899.6.45 1.126.974 1.426 1.573.3.599.45 1.198.375 1.797a3.95 3.95 0 01-.75 1.872c-.45.599-.976 1.048-1.5 1.273-.601.224-1.201.3-1.801.15-.676-.15-1.276-.375-1.951-.9-.675-.523-1.125-.973-1.425-1.572-.3-.599-.45-1.198-.376-1.797.075-.674.3-1.273.75-1.872zm.825.6c-.3.449-.45.823-.525 1.272 0 .45.075.824.375 1.273.225.375.6.749 1.05 1.123.45.375.9.6 1.35.674.45.075.9.075 1.276-.075.375-.15.75-.449 1.05-.898.3-.45.45-.824.526-1.273 0-.45-.076-.824-.376-1.273-.3-.45-.6-.749-1.05-1.123-.45-.375-.9-.6-1.35-.674-.45-.075-.9-.075-1.276.075-.375.224-.75.449-1.05.898zM66.394 69.65l4.426 6.14-.9.673-6.302-2.396 3.301 4.568-.9.674-4.501-6.215.9-.674 6.302 2.396-3.301-4.568.975-.599zM57.541 74.966l2.401 7.114-1.05.374-2.101-6.14-3.226 1.123-.3-.974 4.276-1.497zM48.688 77.138l.226 3.144 2.925 4.194-1.275.075-2.1-2.996-1.576 3.295-1.276.075 2.176-4.642-.225-3.145h1.125zM33.984 75.19l-2.851 6.965-1.05-.45 2.85-6.964 1.05.45zM28.882 72.87l-4.501 6.065-.9-.674.375-6.74-3.376 4.493-.9-.674 4.5-6.065.901.674-.375 6.74 3.376-4.494.9.674zM20.105 64.782l-4.727 6.365-.675-.899 3.976-5.466-6.452 2.097-.675-.974 7.577-2.47.976 1.347zM16.128 57.968l-6.977 2.845-.45-1.048 6.977-2.846.45 1.049zM14.027 50.854l-6.451.974.375 2.47-1.05.15L6 48.383l1.05-.15.375 2.471 6.452-.973.15 1.123zM13.577 43.59l-7.502-.973.6-4.792 1.05.15-.525 3.669 2.101.3.45-3.146.975.15-.375 3.07 2.326.3.525-3.67 1.05.15-.675 4.792zM19.28 27.566c-.451.599-.901 1.048-1.501 1.348-.6.224-1.2.3-1.8.224-.676-.075-1.276-.374-1.952-.823a4.444 4.444 0 01-1.425-1.498c-.3-.524-.45-1.198-.45-1.797 0-.6.225-1.273.675-1.872.45-.6.9-1.049 1.5-1.273.6-.225 1.2-.3 1.801-.225.6.075 1.276.375 1.95.824.676.45 1.126.973 1.426 1.497.3.6.45 1.124.45 1.798 0 .599-.3 1.198-.675 1.797zm-.901-.524c.3-.45.45-.899.45-1.273 0-.45-.15-.824-.375-1.198-.225-.375-.6-.75-1.126-1.049-.45-.3-.975-.524-1.425-.599-.45-.075-.9-.075-1.275.075-.376.15-.75.45-1.05.899-.3.449-.45.898-.45 1.273 0 .449.15.823.374 1.198.225.374.6.749 1.126 1.048.45.3.975.524 1.425.674.45.075.9.075 1.275-.075.45-.3.75-.599 1.05-.973zM23.93 21.875l-4.576-5.99.9-.675 6.378 2.247-3.377-4.493.9-.674 4.577 5.99-.975.674-6.377-2.246 3.376 4.493-.825.674zM32.633 16.259l-2.625-7.04 1.05-.373 2.25 6.14 3.227-1.198.375.973-4.277 1.498zM41.411 13.937l-.375-3.07-3-4.118 1.275-.15 2.175 2.92 1.5-3.37L44.188 6l-2.026 4.717.376 3.07-1.126.15zM50.564 12.065a1.874 1.874 0 001.876-1.872c0-1.034-.84-1.872-1.876-1.872a1.874 1.874 0 00-1.876 1.872c0 1.034.84 1.872 1.876 1.872zM40.586 82.38a1.874 1.874 0 001.876-1.873c0-1.034-.84-1.872-1.876-1.872a1.874 1.874 0 00-1.876 1.872c0 1.034.84 1.872 1.876 1.872z"
                      fill="#462B34"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3644_16241">
                      <path
                        fill="#fff"
                        d="M0 0H79V79H0z"
                        transform="translate(6 6)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg> */}

                <Image
                  src={circle}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-fit group-hover:animate-spin-slow h-fit"
                />
                <div className="absolute bottom-[2.47rem] left-[2rem]">
                  <Image
                    src={footerarrow}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit h-fit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]   absolute  "></div>
        </div>
        <div className="undefined group footer_adjust cursor-pointer  xl:w-[40%]  relative  ">
          <div className="item-start   border-2 bg-white  border-primary-brown bg-custom-blue  rounded-lg  w-full flex justify-start items-center relative z-10 ">
            <div className="flex flex-col items-start  gap-2 px-2 py-8 md:px-5 md:py-12">
              <div className="flex flex-row-reverse">
                <div className="mr-2">
                  <Image src={avatarthree} width={40} height={40} alt="image" />
                </div>
                <div className="mr-2">
                  <Image src={avatarthree} width={40} height={40} alt="image" />
                </div>
                <div className="mr-2">
                  <Image src={avatarthree} width={40} height={40} alt="image" />
                </div>
              </div>
              <div className="pr-10">
                <div className="text-medium  text-lg md:text-2xl lg:text-[26px] ">
                  I&apos;m an Employer, Let's talk business!
                </div>
                <p className="mt-1 font-WhyteInktrap-regular  ">
                  Open access for overseas companies
                </p>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100  -left-8 -top-8 scale-[.7] lg:scale-[0.9] ">
                <Image
                  src={hoverstar}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-fit group-hover:animate-spin-slow duration-700 h-fit"
                />
              </div>
            </div>
            <div className="absolute -right-10 scale-[0.7] md:-right-10 md:scale-[1]">
              <div className="h-fit w-fit">
                <Image
                  src={circlegreen}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-fit group-hover:animate-spin-slow h-fit"
                />
                <div className="absolute bottom-[2.47rem] left-[2rem]">
                  <Image
                    src={footerarrow}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit h-fit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]   absolute  "></div>
        </div>
      </div>
      {/* this above  */}
      <div className="footer relative mx-auto my-0 mt-10 h-full w-[95vw] max-w-[1800px] rounded-[30px] border-2 border-primary-brown pb-2 pt-10 font-WhyteInktrap-regular md:mt-60 md:pt-20 xl:h-[488px]">
        <div className="absolute -top-40  left-0 right-0 z-10 hidden  flex-col items-center justify-center gap-5 md:flex lg:-top-40 lg:flex-row lg:gap-20      ">
          <div className="undefined group footer_adjust cursor-pointer  xl:w-[40%]  relative  ">
            <div className="item-start justify-start  border-2 bg-white  border-primary-brown bg-custom-green  rounded-lg   w-full flex  items-center relative z-10 ">
              <div className="flex flex-col items-start  gap-2 px-2 py-8 md:px-5 md:py-12">
                <div className="flex flex-row-reverse">
                  <div className="-ml-2">
                    <Image
                      src={
                        "	https://hyring.nyc3.cdn.digitaloceanspaces.com/static/avatarone.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/avatartwo.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2">
                    <Image
                      src={avatarthree}
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pr-10  ">
                  <div className="text-medium  text-lg md:text-2xl lg:text-[26px] ">
                    I&apos;m a Job Seeker, Let&apos;s work together!
                  </div>
                  <p className="mt-1 font-WhyteInktrap-regular  ">
                    Invitation-only exclusive access
                  </p>
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100   -left-8 -top-8 scale-[.7] lg:scale-[0.9] ">
                  <Image
                    src={hoverstar}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit group-hover:animate-spin-slow h-fit"
                  />
                </div>
              </div>
              <div className="absolute -right-10 scale-[0.7] md:-right-10 md:scale-[1]">
                <div className="h-fit w-fit">
                  <Image
                    src={circle}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit group-hover:animate-spin-slow h-fit"
                  />
                  <div className="absolute bottom-[2.47rem] left-[2rem]">
                    <Image
                      src={footerarrow}
                      width={100}
                      height={100}
                      alt="image"
                      className="w-fit h-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]   absolute  "></div>
          </div>
          {/* <div className="undefined group footer_adjust cursor-pointer  xl:w-[40%]  relative  ">
            <div className="item-start justify-start  border-2 bg-white  border-primary-brown bg-custom-blue  rounded-lg   w-full flex  items-center relative z-10 ">
              <div className="flex flex-col items-start  gap-2 px-2 py-8 md:px-5 md:py-12">
                <div className="flex  flex-row-reverse">
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companyone.png"
                      }
                      width={50}
                      height={50}
                      className="group-hover:animate-bounce"
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companytwo.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                  <div className="-ml-2">
                    <Image
                      src={
                        "https://hyring.nyc3.cdn.digitaloceanspaces.com/static/companythree.png"
                      }
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pr-10">
                  <div className="text-medium  text-lg md:text-2xl lg:text-[26px] ">
                    I&apos;m an Employer, Let's talk business!
                  </div>
                  <p className="mt-1 font-WhyteInktrap-regular  ">
                    Open access for overseas companies
                  </p>
                </div>
                <div className="absolute opacity-0 group-hover:opacity-100 -left-8 -top-8 scale-[.7] lg:scale-[0.9] ">
                  <Image
                    src={hoverstar}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit group-hover:animate-spin-slow h-fit"
                  />
                </div>
              </div>
              <div className="absolute -right-10 scale-[0.7] md:-right-10 md:scale-[1]">
                <div className="h-fit w-fit">
                  <Image
                    src={circle}
                    width={100}
                    height={100}
                    alt="image"
                    className="w-fit  group-hover:animate-spin-slow h-fit"
                  />
                  <div className="absolute bottom-[2.47rem] left-[2rem]">
                    <Image
                      src={footerarrow}
                      width={100}
                      height={100}
                      alt="image"
                      className="w-fit h-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full rounded-lg bg-primary-brown top-[5px] left-[5px]   absolute  "></div>
          </div> */}
          <FootarCard />
        </div>

        {/* just add this above mobile logo */}

        <div className="max-lg:block  hidden   basis-[300px] pt-0 text-center md:pt-60 lg:pt-5">
          <div className="items-center flex flex-col justify-center">
            <Image
              src={logo}
              className="w-fit  h-fit"
              width={100}
              height={100}
              alt="image"
            />
            <p className="mb-0 mt-5 max-lg:block hidden l text-center font-WhyteInktrap-regular text-xl xs:block sm:mb-10">
              Meet the new gold standard in contract Hyring
            </p>
          </div>
        </div>
        <div className="m-auto mt-0 flex max-w-min items-start gap-x-2 px-6 pt-6 sm:mt-5 md:items-start md:gap-x-12 md:px-4 lg:max-w-[1200px] xl:max-w-[1200px] xl:gap-16 2xl:max-w-[85%]">
          <div className="lg:block hidden  basis-[300px]">
            <div className="">
              <Image
                src={logo}
                className="w-fit  h-fit"
                width={100}
                height={100}
                alt="image"
              />
            </div>
            <p className="mb-0 mt-5 lg:block hidden text-start font-WhyteInktrap-regular text-xl xs:block sm:mb-10">
              Meet the new gold standard in contract Hyring
            </p>
          </div>
          {/* on hover the bangalore it should show the p */}
          <div className="max-sm:my-5 max-sm:flex hidden mb-16 flex-1 flex-col gap-y-5 ">
            <h2 className="text-[22px] font-WhyteInktrap-medium">Location</h2>
            <div className="group">
              <p className="font-WhyteInktrap-regular text-lg group-hover:opacity-0 transition-opacity">
                Bangalore
              </p>
              <p className="mt-2 min-w-[169px] text-sm/[17px] font-[350] text-[#826770] ">
                WeWork, #26, Laskar Hosur Rd, Koramangala, Bengaluru, Karnataka
              </p>
            </div>
            <div>
              <p className="font-WhyteInktrap-regular text-lg">Chennai</p>
              <p className="mt-2 min-w-[169px] text-sm/[17px] font-[350] text-[#826770] ">
                TheHive, Level 3, VR Mall, Anna Nagar, Chennai
              </p>
            </div>
          </div>
          <div className="max-sm:my-5  mb-16 flex flex-1 flex-col gap-y-5">
            <h1 className="text-[22px] font-WhyteInktrap-medium">Company</h1>
            <Link href={"/why-india"}>
              <p className="font-WhyteInktrap-regular text-lg hover:opacity-70">
                Why Inda
              </p>
            </Link>
            <Link href={"/pricing"}>
              {" "}
              <p className="font-WhyteInktrap-regular text-lg hover:opacity-70">
                Pricing
              </p>
            </Link>
            <Link href={"/contact-us"}>
              {" "}
              <p className="font-WhyteInktrap-regular text-lg hover:opacity-70">
                Contaact us
              </p>
            </Link>
            <Link href={"/about-us"}>
              {" "}
              <p className="font-WhyteInktrap-regular text-lg hover:opacity-70">
                About Hyring
              </p>
            </Link>
          </div>
          <div className="max-sm:my-5 overflow-hidden h-full max-sm:hidden  flex mb-16 flex-1 flex-col justify-start gap-y-5 ">
            <h2 className="text-[22px] font-WhyteInktrap-medium  ">Location</h2>

            <div className="group">
              <p className="cursor-pointer  font-WhyteInktrap-regular text-lg hover:opacity-70">
                Bangalore
              </p>
              <p className="mt-2 max-w-[130px] hidden group-hover:opacity-100 overflow-hidden group-hover:flex text-sm/[17px] font-[350] text-[#826770] ">
                WeWork, #26, Laskar Hosur Rd, Koramangala, Bengaluru, Karnataka
              </p>
            </div>
            <div className="group">
              <p className="cursor-pointer font-WhyteInktrap-regular text-lg hover:opacity-70">
                Chennai
              </p>
              <p className="mt-2 max-w-[100px] hidden group-hover:opacity-100 overflow-hidden group-hover:flex text-sm/[17px] font-[350] text-[#826770] ">
                TheHive, Level 3, VR Mall, Anna Nagar, Chennai
              </p>
            </div>
          </div>
          <div className="max-sm:hidden flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-7">
              <h2 className="text-[22px] font-WhyteInktrap-medium">Social</h2>
              <div className="flex items-center gap-5">
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FLinkedinIcon.png&w=32&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FfacebookIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FinstagramIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FtwitterIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-[36px] cursor-pointer   relative  ">
                    <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={
                          "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FyoutubeIcon.png&w=48&q=100"
                        }
                        width={20}
                        height={20}
                        className="w-fit h-fit"
                        alt="image"
                      />
                      <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <h2 className="text-[22px]">Subscribe Newsletter</h2>
              <div className="flex items-center gap-5">
                <div className="h-[60px] undefined w-fit cursor-pointer  text-2xl    relative  ">
                  <div className="w-[260px] h-[57px] border bg-white rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 ">
                    <div className="inline-flex flex-col relative m-0 p-0 ">
                      <div className="leading-[2rem] text-ellipsis   MuiInputBase-colorPrimary  w-[230px] ">
                        <input
                          type="text"
                          placeholder="Enter Email Email "
                          className="outline-none placeholder:text-base placeholder:font-thin font-medium text-base w-full h-full py-[16.5px]  "
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[260px] h-[45px] md:h-[57px] rounded-[8px]  bg-primary-brown    absolute  "
                    style={{ left: "4px", top: "5px" }}
                  ></div>{" "}
                </div>
                <button tabIndex={0} className="hover:scale-105 duration-300">
                  <div className="h-[56px] w-[56px] cursor-pointer  relative    ">
                    {/* <div className="w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 "> */}
                    <div className="w-[52px] z-50  h-[52px] border bg-primary-orange rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                      <Image
                        src={imagearrow}
                        width={100}
                        className="w-fit h-fit"
                        height={100}
                        alt={"image"}
                      />
                    </div>
                    <div
                      className="w-[56px] h-[56px]    rounded-[4px]  bg-primary-brown    absolute      "
                      style={{ left: "2px", top: "2px" }}
                    ></div>{" "}
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* add the footer footer */}
        </div>
        <div className="max-sm:flex hidden flex-col gap-y-6 pb-12 text-center">
          <div className="flex flex-col gap-y-7">
            <h2 className="text-[22px]">Social</h2>
            <div className="m-auto flex items-center gap-5">
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FLinkedinIcon.png&w=32&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FfacebookIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FinstagramIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FtwitterIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
              <Link href={""}>
                <div className="w-[36px] cursor-pointer   relative  ">
                  <div className="w-[36px] group    h-[36px]  border bg-white social-button-hover   rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={
                        "https://hyring.com/_next/image?url=%2Ficons%2Fsocial-media-icons%2FyoutubeIcon.png&w=48&q=100"
                      }
                      width={20}
                      height={20}
                      className="w-fit h-fit"
                      alt="image"
                    />
                    <div className="w-[36px] -z-30 top-[2px] opacity-0 group-hover:opacity-100 group-hover:ml-1 group-hover:bottom-1 h-[36px]  border-2 rounded-[4px] bg-secondary-color duration-300  custom-bg border-primary-brown    absolute  "></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-7">
            <h2 className="text-[22px]">Subscribe Newsletter</h2>
            <div className="m-auto flex items-center gap-2 pb-0">
              <div className="h-[60px] undefined w-fit cursor-pointer  text-2xl    relative  ">
                <div className="w-[215px] h-[57px] border bg-white rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 ">
                  <div className="">
                    <div className="leading-[2rem] text-ellipsis px-[10px]    w-[230px] ">
                      <input
                        type="text"
                        placeholder="Enter Email Address"
                        className="outline-none placeholder:text-base placeholder:font-thin font-medium text-base w-full h-full py-[16.5px]  "
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="w-[215px] xxs:w-[270px] h-[57px]  rounded-[8px]  bg-primary-brown    absolute    "
                  style={{ left: "4px", top: "5px" }}
                ></div>{" "}
              </div>
              <button tabIndex={0} className="hover:scale-105 duration-300">
                <div className="h-[56px] w-[56px] cursor-pointer  relative    ">
                  {/* <div className="w-[46px] md:w-[56px] h-[45px] md:h-[57px] border bg-primary-orange rounded-[8px] border-primary-brown flex justify-center items-center relative z-10 "> */}
                  <div className="w-[52px] z-50  h-[52px] border bg-primary-orange rounded-[4px] border-primary-brown flex justify-center items-center relative  ">
                    <Image
                      src={imagearrow}
                      width={100}
                      className="w-fit h-fit"
                      height={100}
                      alt={"image"}
                    />
                  </div>
                  <div
                    className="w-[54px] h-[54px]    rounded-[4px]  bg-primary-brown    absolute      "
                    style={{ left: "2px", top: "2px" }}
                  ></div>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="pb-[5px] ml-16 mr-16 mt-0 border-t-[1px] border-solid border-[#593a25] pt-[8px] font-WhyteInktrap-regular xxs:mt-10 lg:ml-24 lg:mr-24 xl:mt-6"> */}

        <div className=""></div>
        <div className=""></div>
        <div className="sm:mt-10 pb-[5px] ml-16 mr-16 mt-0 border-t-[1px] border-solid border-[#593a25] pt-[8px] font-WhyteInktrap-regular  lg:ml-24 lg:mr-24 xl:mt-6">
          <div className="mt-2 flex flex-col justify-between  gap-y-5 md:mt-0 md:flex-row md:gap-y-0">
            <div className="flex flex-row items-center justify-around  gap-0 md:justify-center md:gap-3 lg:gap-8">
              <Link href={""}>
                <p className="cursor-pointer font-WhyteInktrap-regular text-sm hover:opacity-70 md:text-base lg:text-lg">
                  Privacy Policy
                </p>
              </Link>
              <Link href={""}>
                <p className="cursor-pointer font-WhyteInktrap-regular text-sm hover:opacity-70 md:text-base lg:text-lg">
                  Terms & Conditions
                </p>
              </Link>
            </div>
            <div className="flex justify-center font-WhyteInktrap-regular text-sm md:text-base lg:text-lg">
              Copyright © 2023 Hyring. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
