import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export const GalleryPicker = ({
  onSelect,
  allThemes,
  selectedImg,
}: {
  onSelect: (theme: string) => void;
  allThemes: { img: string; thumbnail: string }[];
  selectedImg: string;
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={galleryRef}
      className="w-full  pt-8  focus:outline-none h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth  flex gap-4 scrollbar-hide" // Add the scrollbar-hide class
      tabIndex={0}
    >
      {allThemes.map((item, index) => {
        return (
          <img
            alt="thumbnail of the images that can be picked as a background"
            onClick={() => onSelect(item.img)}
            className={twMerge(
              " cursor-pointer rounded-md w-[100px] hover:scale-105 transition-all duration-300 h-[70px]",
              item.img == selectedImg && " outline outline-2 outline-green-500"
            )}
            src={item.thumbnail}
            key={index}
          />
        );
      })}
    </div>
  );
};
