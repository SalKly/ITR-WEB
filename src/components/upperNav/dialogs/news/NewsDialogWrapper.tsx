import { useEffect, useRef, useState } from "react";
import SelectedNewsItem from "./SelectedNewsItem";
import NewsFeed from "./NewsFeed";
import exitImg from "/exit.png";
import Button from "../../../shared/Button";
import arrowLeftImg from "/arrowLeft.png";

const NewsDialogWrapper = ({ onClose }: { onClose: () => void }) => {
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  const newsFeedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (newsFeedRef.current) {
      newsFeedRef.current.focus();
    }
  }, []);

  const handleSelectNewsItem = (id: number) => {
    setSelectedNewsId(id);
  };
  const resetSelectedItem = () => {
    setSelectedNewsId(null);
  };

  return (
    <div className="glassyEffect-md pt-4 ">
      <div className="flex justify-between items-start mb-4 px-4 ">
        <div>
          {selectedNewsId !== null && (
            <div>
              <p className="text-white mb-2">اخر الاخبار</p>
              <Button
                size="auto"
                className="py-2 px-2"
                iconUrl={arrowLeftImg}
                variant="outline"
                text="الرجوع لكل الاخبار"
                onclick={resetSelectedItem}
              />
            </div>
          )}
        </div>
        <button
          onClick={() => {
            onClose();
            resetSelectedItem();
          }}
          className="flex justify-end "
        >
          <img src={exitImg} alt="Exit" />
        </button>
      </div>
      <div ref={newsFeedRef} className="h-[80dvh] outline-none w-[90vw] sm:w-[80vw] lg:w-[40vw] px-2  sm:px-4 sm:mx-4 overflow-y-scroll" tabIndex={0}>
        {selectedNewsId === null ? <NewsFeed setSelectedId={handleSelectNewsItem} /> : <SelectedNewsItem selectedId={selectedNewsId} />}
      </div>
    </div>
  );
};

export default NewsDialogWrapper;
