import React from "react";
import RecentWorkCardLarge from "./RecentWorkCardLarge";
import RecentWorkCardSmall from "./RecentWorkCardSmall";

interface Work {
  id: number;
  workHeading: string;
  workDescription: string;
  bgImageSrc: string;
}

const works: Work[] = [
  {
    id: 1,
    workHeading: "Alcohol Tracker",
    workDescription: "All-In-One (AIO) Service",
    bgImageSrc: "/background/work1.png",
  },
  {
    id: 2,
    workHeading: "Rely",
    workDescription: "All-In-One (AIO) Service",
    bgImageSrc: "/background/work2.png",
  },
  {
    id: 3,
    workHeading: "Alcohol Tracker",
    workDescription: "All-In-One (AIO) Service",
    bgImageSrc: "/background/work3.png",
  },
  {
    id: 4,
    workHeading: "Finance Website",
    workDescription: "All-In-One (AIO) Service",
    bgImageSrc: "/background/work4.png",
  },
  {
    id: 5,
    workHeading: "Alcohol Tracker",
    workDescription: "All-In-One (AIO) Service",
    bgImageSrc: "/background/work5.png",
  },
];

const RecentWorks = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[48px] font-bold leading-[150%]">
          Our Most Recent Works
        </h3>
        <p className="max-w-[372px] text-center text-[#D6E0E7] text-[20px] font-normal leading-[120%] mt-[4px]">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>
      </div>

      {/* First 2 works - Large Cards */}
      <div className="flex items-center justify-between">
        {works.slice(0, 2).map((work) => (
          <div key={work.id}>
            <RecentWorkCardLarge
              workHeading={work.workHeading}
              workDescription={work.workDescription}
              bgImageSrc={work.bgImageSrc}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        {works.slice(2).map((work) => (
          <div key={work.id}>
            <RecentWorkCardSmall
              workHeading={work.workHeading}
              workDescription={work.workDescription}
              bgImageSrc={work.bgImageSrc}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentWorks;
