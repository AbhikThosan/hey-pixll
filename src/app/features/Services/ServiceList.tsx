import React from "react";
import Service1 from "../../../../public/icons/Service1";
import Service2 from "../../../../public/icons/Service2";
import Service3 from "../../../../public/icons/Service3";
import Service4 from "../../../../public/icons/Service4";
import ServiceCard from "./ServiceCard";
import serviceBg from "../../../../public/images/service-bg.png";

interface Service {
  id: number;
  iconComponent: React.ReactNode;
  serviceHeading: string;
  serviceDescription: string;
  bgImageSrc: string;
  top?: string;
}

const services: Service[] = [
  {
    id: 1,
    iconComponent: <Service1 />,
    serviceHeading: "All-In-One (AIO) Service",
    serviceDescription:
      "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
    bgImageSrc: "/background/serviceCardBg1.png",
    top: "50px",
  },
  {
    id: 2,
    iconComponent: <Service2 />,
    serviceHeading: "Project-Based Development",
    serviceDescription:
      "Ideal for agencies with ready designs, our service focuses on bringing...",
    bgImageSrc: "/background/serviceCardBg2.png",
    top: "113px",
  },
  {
    id: 3,
    iconComponent: <Service3 />,
    serviceHeading: "Scalable Dev Partnership",
    serviceDescription:
      "Our partnership is designed for businesses needing consistent support...",
    bgImageSrc: "/background/serviceCardBg3.png",
    top: "66px",
  },
  {
    id: 4,
    iconComponent: <Service4 />,
    serviceHeading: "End-to-End Consulting",
    serviceDescription:
      "Our partnership is designed for businesses needing consistent support...",
    bgImageSrc: "/background/serviceCardBg4.png",
    top: "0px",
  },
];

const ServiceList = () => {
  return (
    <>
      <div
        className="relative mb-[80px]"
        style={{
          backgroundImage: `url(${serviceBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative">
          <p className="max-w-[1140px] text-[#6D6D6D] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium leading-[150%] mx-auto mt-[50px] md:mt-[80px] lg:mt-[100px] px-4">
            We are a full-service studio creating transformative{" "}
            <span className="text-white font-bold">
              digital experiences and solutions.
            </span>{" "}
            specializing in{" "}
            <span className="text-white font-bold">websites and web</span>{" "}
            applications.
          </p>

          <div className="lg:h-[470px] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1140px] mx-auto mt-6 md:mt-8 lg:mt-10 px-4">
            {services.map((service) => (
              <div key={service.id} className="">
                <ServiceCard
                  iconComponent={service.iconComponent}
                  serviceHeading={service.serviceHeading}
                  serviceDescription={service.serviceDescription}
                  bgImageSrc={service.bgImageSrc}
                  top={service.top}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceList;
