'use client';
import ArrowRightUp from "../../../../public/icons/ArrowRightUp";
interface CommonButtonProps {
    buttonText?: string;
    buttonLink?: string;
    showIcon?: boolean;
}
export const CommonButton = ({buttonText, buttonLink, showIcon}: CommonButtonProps) => {
    return (
        <>
        <button onClick={() => window.open(buttonLink, '_blank')} className="text-[20px] font-semibold leading-[120%] text-white px-[32px] py-[20px] rounded-[48px] bg-gradient-to-r from-[#73BFFA] to-[#3C97F5] text-center flex items-center justify-center gap-[8px] cursor-pointer">
          {buttonText}
          {showIcon && <ArrowRightUp />}
        </button>
        </>
    );
};

