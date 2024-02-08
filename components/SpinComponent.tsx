import Image from "next/image";
import React from "react";

type Props = {};

const SpinComponent = (props: Props) => {
  return (
    <div className="px-5 md:px-10 aos-init aos-animate">
      <div className="mx-auto my-0 max-w-[1800px]">
        <div className="undefined  relative  ">
          <div className="flex justify-center items-center min-w-[200px] border-2 border-primary-brown w-full h-full md:h-[500px] mt-20 flex-wrap px-10 py-2 bg-[#FDFDFD] rounded-[44px]  mx-auto gap:3 xs:gap-5 sm:gap-12 lg:gap-20 overflow-hidden  relative z-10">
            <div className="relative pl-0 md:pl-8">
              <div className="network_circle_rotate  relative  ">
                <div
                  className={`network_circle_rotate-item scale-75`}
                  style={{ "--d": "0s" } as any}
                >
                  <Image
                    src={
                      "https://hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonCircle1.37451c85.png&w=96&q=100"
                    }
                    width={400 / 2}
                    height={1000}
                    style={{
                      animation: "spinLeft 12s var(--d, 0s) linear infinite",
                    }}
                    className="w-[94px]  h-fit object-cover"
                    alt=""
                  />
                </div>
                <div
                  className={`network_circle_rotate-item scale-75`}
                  style={{ "--d": "-2s" } as any}
                >
                  <Image
                    src={
                      "https://hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonCircle2.fce75f81.png&w=96&q=100"
                    }
                    width={400 / 2}
                    style={{
                      animation: "spinLeft 12s var(--d, -2s) linear infinite",
                    }}
                    height={850 / 2}
                    className="w-[94px]  h-fit object-cover"
                    alt=""
                  />
                </div>
                <div
                  className={`network_circle_rotate-item scale-75`}
                  style={{ "--d": "-4s" } as any}
                >
                  <Image
                    src={
                      "https://hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonCircle3.5eb3059e.png&w=96&q=100"
                    }
                    width={400 / 2}
                    style={{
                      animation: "spinLeft 12s var(--d, -4s) linear infinite",
                    }}
                    height={850 / 2}
                    className="w-[94px]  h-fit object-cover"
                    alt=""
                  />
                </div>
                <div
                  className={`network_circle_rotate-item scale-75`}
                  style={{ "--d": "-6s" } as any}
                >
                  <Image
                    src={
                      "https://hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonCircle5.c87d3f4c.png&w=96&q=100"
                    }
                    width={400 / 2}
                    style={{
                      animation: "spinLeft 12s var(--d, -6s) linear infinite",
                    }}
                    height={850 / 2}
                    className="w-[94px]  h-fit object-cover"
                    alt=""
                  />
                </div>
                <div
                  className={`network_circle_rotate-item scale-75`}
                  style={{ "--d": "-8s" } as any}
                >
                  <Image
                    src={
                      "https://hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonCircle4.99aae2be.png&w=96&q=100"
                    }
                    width={400 / 2}
                    style={{
                      animation: "spinLeft 12s var(--d, -8s) linear infinite",
                    }}
                    height={850 / 2}
                    className="w-[94px]  h-fit object-cover"
                    alt=""
                  />
                </div>
                <div
                  className={`network_circle_rotate-item scale-75`}
                  style={{ "--d": "-10s" } as any}
                >
                  <Image
                    src={
                      "https://hyring.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonCircle6.8bc0de91.png&w=96&q=100"
                    }
                    width={400 / 2}
                    style={{
                      animation: "spinLeft 12s var(--d, -10s) linear infinite",
                    }}
                    height={850 / 2}
                    className="w-[94px]  h-fit object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full min-w-[200px] flex-1">
              <p className="mb-2 font-WhyteInktrap-medium text-xl text-primary-brown sm:text-3xl md:mb-5 md:text-4xl lg:text-5xl xl:text-6xl">
                Network
              </p>
              <p className="text-md font-primary text-primary-brown sm:text-lg md:text-xl xl:text-2xl">
                Work with consolidated top 5% of talent pool of over
                <span className="font-WhyteInktrap-medium">500,000</span>
                professionals, including designers, developers, marketers,
                analysts, data scientists, testers and cybersecurity experts.
              </p>
            </div>
          </div>
          <div className="min-w-[200px] w-[100%] h-[100%] md:h-[500px] rounded-[44px]  bg-primary-brown   absolute  top-2 left-2 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default SpinComponent;
