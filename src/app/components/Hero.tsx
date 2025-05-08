import React from "react";
import Fixmyphone from "../../../public/logo/Fixmyphone";
import Verdant from "../../../public/logo/Verdant";
import Duet from "../../../public/logo/Duet";
import Apex from "../../../public/logo/Apex";
import Lindholms from "../../../public/logo/Lindholms";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-[68px]">
        <h2 className="max-w-[740px] text-[64px] font-bold leading-[120%] text-center">
          We Shape Your Ideas Into Awesome Digital Experience
        </h2>
        <p className="text-[24px] font-medium leading-[120%] text-[#D6E0E7 mt-[24px] mb-[40px] text-center">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>
        <button className="text-[20px] font-semibold leading-[120%] text-white px-[32px] py-[20px] rounded-[48px] bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] text-center">
          Book a call with us
        </button>
      </div>
      <div className="flex items-center justify-between">
        <Fixmyphone />
        <Verdant />
        <Duet />
        <Apex />
        <Lindholms />
      </div>
    </>
  );
};

export default Hero;
