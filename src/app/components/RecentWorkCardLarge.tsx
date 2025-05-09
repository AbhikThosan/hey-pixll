import ArrowRightUp from "../../../public/icons/ArrowRightUp";

interface RecentWorkCardProps {
  workHeading: string;
  workDescription: string;
  bgImageSrc: string;
}

const RecentWorkCardLarge: React.FC<RecentWorkCardProps> = ({
  workHeading,
  workDescription,
  bgImageSrc,
}) => {
  return (
    <div
      className="w-[554px] h-[566px] rounded-[16px] border border-[#ffffff80] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImageSrc})` }}
    >
      <div className="flex items-center  justify-between px-[24px] pb-[24px]">
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-white text-[32px] font-bold  leading-[120%]">
            {workHeading}
          </h3>
          <p className="text-[#D1D1D1] text-[24px] font-normal  leading-[120%]">
            {workDescription}
          </p>
        </div>
        <button className="px-[24px] py-[12px] rounded-[56px] border border-white/10 bg-[#93d1fd1a] backdrop-blur-[20px] flex items-center justify-between gap-[8px]">
          <span className="text-white text-[24px] font-medium  leading-[75%]">
            Open
          </span>
          <ArrowRightUp />
        </button>
      </div>
    </div>
  );
};

export default RecentWorkCardLarge;
