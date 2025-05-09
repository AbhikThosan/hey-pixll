import { CommonHeader } from "../Common/CommonHeader";
import serviceTitleBg from "./../../../../public/images/work-title-bg.png"
import { FeatureInsightsList } from "./FeatureInsightsList";
import { CommonButton } from "../Common/CommonButton";
export const FeaturedInsights = () => {
    return (
        <>
        <div className="mt-20 pb-[120px]">
            <CommonHeader title="Featured Insights" description="Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem." backgroundImage={serviceTitleBg.src} />
            <FeatureInsightsList />
            <div className="flex justify-center mt-10">
                <CommonButton buttonText="View More" buttonLink="#" showIcon={true} />
            </div>
        </div>
            
        </>
    );
};

