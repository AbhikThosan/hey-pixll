import React from "react";
import Fixmyphone from "../../../../public/logo/Fixmyphone";
import { CommonButton } from "../Common/CommonButton";
import Verdant from "../../../../public/logo/Verdant";
import Duet from "../../../../public/logo/Duet";
import Apex from "../../../../public/logo/Apex";
import Lindholms from "../../../../public/logo/Lindholms";


const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-[40px] md:my-[68px]">
        <h2 className="max-w-[740px] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-[120%] text-center px-4">
          We Shape Your Ideas Into Awesome Digital Experience
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[120%] text-[#D6E0E7] mt-[16px] md:mt-[24px] mb-[24px] md:mb-[40px] text-center px-4">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>

        <CommonButton buttonText="Book a call with us" buttonLink="#" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mb-[40px] md:mb-[83px] px-4">
        <div className="flex justify-center">
          <Fixmyphone />
        </div>
        <div className="flex justify-center">
          <Verdant />
        </div>
        <div className="flex justify-center">
          <Duet />
        </div>
        <div className="flex justify-center">
          <Apex />
        </div>
        <div className="flex justify-center">
          <Lindholms />
        </div>
      </div>
    </>
  );
};

export default Hero;
