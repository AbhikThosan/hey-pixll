import ArrowRightUp from "../../../../public/icons/ArrowRightUp";
import featureInsightsBg from "./../../../../public/images/feature-ins-bg.png";
import { useFeatures } from "../../hooks/useFeatures.hook";

export const FeatureInsightsList = () => {
    const { features } = useFeatures();

    return (
        <div className="mt-10">
            {features.map((feature) => (
                <div 
                    key={feature.id}
                    className="flex items-center justify-between p-4 md:p-6 mb-4 md:mb-6" 
                    style={{
                        backgroundImage: `url(${featureInsightsBg.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "no-repeat",
                        backgroundPosition: "left",
                    }}>
                    <h2 className="text-lg md:text-2xl font-semibold"> 
                        <span className="text-[#73BFFA]">{feature.id}</span> {feature.title}
                    </h2>
                    <ArrowRightUp />
                </div>
            ))}
        </div>
    );
};