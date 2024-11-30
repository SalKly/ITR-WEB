import { twMerge } from "tailwind-merge";

const TextClamp = ({
  text,
  charLimit = 50,
  seeMoreText = "شاهد المزيد",
  hideSeeMore,
  className,
}: {
  text: string;
  charLimit: number;
  seeMoreText?: string;
  hideSeeMore?: boolean;
  className?: string;
}) => {
  const isTextLong = text.length > charLimit;

  const truncatedText = isTextLong ? text.slice(0, charLimit) + "..." : text;

  return (
    <div style={{ maxWidth: `${charLimit}ch`, overflow: "hidden" }}>
      <span className={twMerge(className)}>{truncatedText}</span>

      {isTextLong && !hideSeeMore && <span className="text-2xs text-[#FFCA31]">{seeMoreText}</span>}
    </div>
  );
};

export default TextClamp;
