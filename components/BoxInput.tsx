import React from "react";

type Props = {
  placeholder?: string;
};

const BoxInput = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder}
      data-aria-label="Please Enter OTP character"
      className=" text-center bg-[#fff7ef] rounded-lg border-[1px] border-[#462b34] !h-[2.5rem] !w-[2.5rem] text-[1rem] [appearance:textfield]   focus:outline-none md:text-[1.5rem] md:!h-[4rem] md:!w-[4rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      inputMode="numeric"
      type="number"
    />
  );
};

export default BoxInput;
