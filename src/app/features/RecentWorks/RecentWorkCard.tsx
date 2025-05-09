type Work = {
    id: number;
    workHeading: string;
    workDescription: string;
    bgImageSrc: string;
    height?: string;
  };
export default function RecentWorkCard({ work }: { work: Work }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
    <div 
      style={{ 
        backgroundImage: `url(${work.bgImageSrc})`,
        height: work.height,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
       }}
    >
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:bg-opacity-20"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white bg-[#0a0a0a] w-full" style={{ boxShadow: '0px 0px 30px 30px #0a0a0a' }}>
        <h3 className="text-[32px] font-bold mb-1">{work.workHeading}</h3>
        <p className="text-[24px] font-normal text-[#D1D1D1]">{work.workDescription}</p>
      </div>
    </div>
  </div>
  );
}