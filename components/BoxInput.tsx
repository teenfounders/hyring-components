"use client";
import React, {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  placeholder?: string;
  length?: number;
  onOtpSubmit: (value: string) => void;
};

const BoxInput = ({ length = 4, placeholder, onOtpSubmit }: Props) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef: MutableRefObject<(HTMLInputElement | null)[]> = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0]?.focus();
    }
  }, []);

  const handleChange = (index: any, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Check if the value is a valid number
    let numericValue: number;

    // Check if the value is already a number
    if (isNaN(parseFloat(value))) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }
    // move to next input field
    if(value && index<length-1 && inputRef.current[index+1]){
      
console.log('hello', value)
inputRef.current[index+1]?.focus()
    }
  };

  const handleClick = (index:any) => {
    inputRef.current[index]?.setSelectionRange(1,1);
  };
  const handleKeyDown = (
    index: any,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      // If the current input field is empty, move focus to the previous input field
      if (!otp[index] && index > 0 && inputRef.current[index - 1]) {
        inputRef.current[index - 1]?.focus();
      } else {
        // If the current input field is not empty, clear it
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };
  

  return (
    <>
      {otp.map((value: any, index: any) => {
        return (
          <input
            placeholder={placeholder}
            data-aria-label="Please Enter OTP character"
            className="text-center bg-[#fff7ef] rounded-lg border-[1px] border-[#462b34] !h-[2.5rem] !w-[2.5rem] text-[1rem] [appearance:textfield] focus:outline-none md:text-[1.5rem] md:!h-[4rem] md:!w-[4rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="text"
            ref={(input) => {
              if (input) {
                inputRef.current[index] = input;
              }
            }}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            value={value}
          />
        );
      })}
    </>
  );
};

export default BoxInput;
