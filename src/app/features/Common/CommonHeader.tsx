interface CommonHeaderProps {
    title?: string;
    description?: string;
    backgroundImage?: string;
}

export const CommonHeader = ({title, description, backgroundImage}: CommonHeaderProps) => {
    return (
        <>
            <div 
                className="flex flex-col items-center justify-center pt-[50px] sm:pt-[70px] md:pt-[100px] pb-[20px] w-full md:w-3/4 lg:w-1/2 mx-auto px-4" 
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }} >
                    <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[150%] text-center">
                      {title}
                    </h3>
                    <p className="w-full max-w-[372px] text-center text-[#D6E0E7] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[120%] mt-[4px]">
                    {description}
                    </p>
            </div>
        </>
    );
};
