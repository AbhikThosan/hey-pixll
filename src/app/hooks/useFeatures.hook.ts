interface Feature {
    id: string;
    title: string;
}

export const useFeatures = () => {
    const features: Feature[] = [
        {
            id: "01",
            title: "How to Protect Your Identity While Traveling"
        },
        {
            id: "02",
            title: "How to Protect Your Identity While Traveling"
        },
        {
            id: "03",
            title: "How to Protect Your Identity While Traveling"
        },
        {
            id: "04",
            title: "How to Protect Your Identity While Traveling"
        },
        {
            id: "05",
            title: "How to Protect Your Identity While Traveling"
        },
        {
            id: "06",
            title: "How to Protect Your Identity While Traveling"
        }
    ];

    return { features };
}; 