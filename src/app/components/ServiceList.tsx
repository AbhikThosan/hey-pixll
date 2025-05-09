import React from "react";
import Service1 from "../../../public/icons/Service1";
import Service2 from "../../../public/icons/Service2";
import Service3 from "../../../public/icons/Service3";
import Service4 from "../../../public/icons/Service4";
import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  iconComponent: React.ReactNode;
  serviceHeading: string;
  serviceDescription: string;
  bgImageSrc: string;
}

const services: Service[] = [
  {
    id: 1,
    iconComponent: <Service1 />,
    serviceHeading: "All-In-One (AIO) Service",
    serviceDescription:
      "Our AIO solution tailors to your unique vision, crafting a website that truly reflects...",
    bgImageSrc: "/background/serviceCardBg1.png",
  },
  {
    id: 2,
    iconComponent: <Service2 />,
    serviceHeading: "Project-Based Development",
    serviceDescription:
      "Ideal for agencies with ready designs, our service focuses on bringing...",
    bgImageSrc: "/background/serviceCardBg2.png",
  },
  {
    id: 3,
    iconComponent: <Service3 />,
    serviceHeading: "Scalable Dev Partnership",
    serviceDescription:
      "Our partnership is designed for businesses needing consistent development support...",
    bgImageSrc: "/background/serviceCardBg3.png",
  },
  {
    id: 4,
    iconComponent: <Service4 />,
    serviceHeading: "End-to-End Consulting",
    serviceDescription:
      "Our partnership is designed for businesses needing consistent development support...",
    bgImageSrc: "/background/serviceCardBg4.png",
  },
];

const ServiceList = () => {
  return (
    <>
      <p className="max-w-[1140px] text-[#6D6D6D] text-[40px] font-medium leading-[150%] mx-auto mt-[100px]">
        We are a full-service studio creating transformative{" "}
        <span className="text-white text-[40px] font-bold">
          digital experiences and solutions.
        </span>{" "}
        specializing in{" "}
        <span className="text-white text-[40px] font-bold">
          websites and web
        </span>{" "}
        applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  max-w-[1140px] mx-auto mt-10">
        {services.map((service) => (
          <div key={service.id}>
            <ServiceCard
              iconComponent={service.iconComponent}
              serviceHeading={service.serviceHeading}
              serviceDescription={service.serviceDescription}
              bgImageSrc={service.bgImageSrc}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceList;
