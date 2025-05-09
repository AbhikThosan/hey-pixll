import { Work } from '../types/work';
import work1 from "./../../../public/background/work1.png"
import work2 from "./../../../public/background/work2.png"
import work3 from "./../../../public/background/work3.png"
import work4 from "./../../../public/background/work4.png"
import work5 from "./../../../public/background/work5.png"

export const useWorksList = () => {
  const works: Work[] = [
    {
      id: 1,
      workHeading: "Alcohol Tracker",
      workDescription: "All-In-One (AIO) Service",
      bgImageSrc: work1.src,
      height: "550px",
    },
    {
      id: 2,
      workHeading: "Rely",
      workDescription: "All-In-One (AIO) Service",
      bgImageSrc: work2.src,
      height: "550px",
    },
    {
      id: 3,
      workHeading: "Alcohol Tracker",
      workDescription: "All-In-One (AIO) Service",
      bgImageSrc: work3.src,
      height: "360px",
    },
    {
      id: 4,
      workHeading: "Finance Website",
      workDescription: "All-In-One (AIO) Service",
      bgImageSrc: work4.src,
      height: "360px",
    },
    {
      id: 5,
      workHeading: "Alcohol Tracker",
      workDescription: "All-In-One (AIO) Service",
      bgImageSrc: work5.src,
      height: "360px",
    }
 
  ];

  return { works };
}; 