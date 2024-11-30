import { forwardRef } from "react";
import { NewType } from "../../../../models/News";
import { getCurrentLocalDateAr } from "../../../../utils/dateTimeFormatters";
import TextClamp from "../../../shared/TextClamp";

const NewsItem = forwardRef<HTMLDivElement, { data: NewType }>(({ data }, ref) => {
  return (
    <div className="flex gap-4 cursor-pointer w-[100%]  hover:opacity-80  transition-all duration-200 text-white" ref={ref}>
      <img alt="background image" loading="lazy" src={data.image} className="w-[5rem] h-[3rem] sm:w-[11.75rem] sm:h-[7.125rem] rounded-lg" />
      <div className="w-[100%] md:w-[60%] ">
        <p className=" text-textGray text-xs">{getCurrentLocalDateAr(new Date(data.publishedAt))}</p>
        <TextClamp hideSeeMore text={data.title} charLimit={40} className=" text-base" />
        <TextClamp className="text-sm text-textGray" charLimit={70} text={data.body || ""} />
      </div>
    </div>
  );
});

export default NewsItem;
