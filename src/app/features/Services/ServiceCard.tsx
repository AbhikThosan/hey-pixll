"use client";

import React, { useEffect, useState } from "react";
import ArrowRightUp from "../../../../public/icons/ArrowRightUp";

interface ServiceCardProps {
  iconComponent: React.ReactNode;
  serviceHeading: string;
  serviceDescription: string;
  bgImageSrc: string;
  top?: string | number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconComponent,
  serviceHeading,
  serviceDescription,
  bgImageSrc,
  top,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // On mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="p-[24px] rounded-[16px] border border-[#ffffff80] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgImageSrc})`,
        transform: isLargeScreen ? `translateY(${top})` : undefined,
      }}
    >
      {iconComponent}
      <div className="mt-[64px]">
        <div className="flex">
          <h3 className="text-white text-[24px] font-bold  leading-[120%] mb-[16px]">
            {serviceHeading}
          </h3>
          <ArrowRightUp />
        </div>
        <p className="text-[#D1D1D1] text-[16px] font-normal leading-[150%]">
          {serviceDescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
