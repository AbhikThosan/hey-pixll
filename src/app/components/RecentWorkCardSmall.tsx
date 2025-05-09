import ArrowRightUp from "../../../public/icons/ArrowRightUp";

interface RecentWorkCardProps {
  workHeading: string;
  workDescription: string;
  bgImageSrc: string;
}

const RecentWorkCardSmall: React.FC<RecentWorkCardProps> = ({
  workHeading,
  workDescription,
  bgImageSrc,
}) => {
  return (
    <div
      className=" w-[364px] h-[372px] rounded-[16px] border border-[#ffffff80] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImageSrc})` }}
    >
      <div className="flex items-center  justify-between px-[16px] pb-[16px] ">
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-[20px] font-bold  leading-[120%]">
            {workHeading}
          </h3>
          <p className="text-[#D1D1D1] text-[14px] font-normal  leading-[120%]">
            {workDescription}
          </p>
        </div>
        <button className="px-[15.81px] py-[7.91px] rounded-[36.9px] border border-white/10 bg-[#93d1fd1a] backdrop-blur-[20px] flex items-center justify-between gap-[8px]">
          <span className="text-white text-[16px] font-medium  leading-[75%]">
            Open
          </span>
          <ArrowRightUp />
        </button>
      </div>
    </div>
  );
};

export default RecentWorkCardSmall;
