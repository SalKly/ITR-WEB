import { useState } from "react";
import useInterval from "../../../../hooks/useInterval";
import { twMerge } from "tailwind-merge";
import { NewType } from "../../../../models/News";

function Carousel({ data }: { data: NewType[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const getDataById = (index: number) => {
    return data[index];
  };

  useInterval(() => {
    if (!pause) {
      setCurrentIndex((prev) => {
        if (prev == data.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    } else {
      setPause(false);
    }
  }, 3000);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setPause(true);
  };

  return (
    <div className="h-[200px] w-[80%]  sm:w-[100%]  ">
      <div
        style={{ backgroundImage: `url(${getDataById(currentIndex)?.image})` }}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
      ></div>

      <div className="flex gap-2  justify-center py-2">
        {data.map((newsItem, slideIndex) => (
          <div key={newsItem.id} onClick={() => handleDotClick(slideIndex)} className="text-2xl cursor-pointer">
            <div
              className={twMerge(
                "w-[8px] h-[8px] opacity-40 rounded-full bg-white  transition-all duration-300",
                slideIndex === currentIndex && " scale-150 opacity-100"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
