import React from "react";
import serviceTitleBg from "./../../../../public/images/work-title-bg.png";
import { CommonButton } from "../Common/CommonButton";
import { CommonHeader } from "../Common/CommonHeader";
import { useWorksList } from "../../hooks/useWorksList.hook";
import RecentWorkCard from "./RecentWorkCard";

const RecentWorks = () => {
  const { works } = useWorksList();

  return (
    <>
      <CommonHeader
        title="Our Most Recent Works"
        description="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem."
        backgroundImage={serviceTitleBg.src}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <RecentWorkCard work={works[0]} />
          </div>
          <div>
            <RecentWorkCard work={works[1]} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <RecentWorkCard work={works[2]} />
          </div>
          <div>
            <RecentWorkCard work={works[3]} />
          </div>
          <div>
            <RecentWorkCard work={works[4]} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[48px] mb-[40px]">
        <CommonButton buttonText="View more" buttonLink="#" showIcon={true} />
      </div>
    </>
  );
};

export default RecentWorks;
