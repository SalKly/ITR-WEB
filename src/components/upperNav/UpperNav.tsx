import ActionIcon from "./ActionIcon";
import logoImg from "/logo.png";
import galleryImg from "/actionIcons/gallery.png";
import menuImg from "/actionIcons/menu.png";
import newsImg from "/actionIcons/news.png";
import placeholderImg from "/placeholder.png";
import arrowDownImg from "/arrowDown.png";
import DateWeatherComp from "./DateWeatherComp";
import Dialog from "../shared/Dialog";
import { useRef, useState } from "react";
import { GalleryDialog } from "./dialogs/GalleryDialog";
import NewsDialogWrapper from "./dialogs/news/NewsDialogWrapper";

const UpperNav = () => {
  const [isGalleryDialogOpen, setGalleryDialogOpen] = useState(false);
  const [isNewsDialogOpen, setNewsDialogOpen] = useState(false);
  const menuRef = useRef(null);
  return (
    <div className=" flex justify-between items-start  px-2 pt-2  md:pt-8 md:px-12">
      <div className="flex  items-center gap-4 md:gap-6">
        <div className="glassyEffect-lg flex py-1 px-2 gap-2 rounded-xl items-center">
          <img alt="Your profile image" src={placeholderImg} />
          <p className="text-base text-white font-semibold ml-2">عمر الالفي</p>
          <img alt="arrow down icon" src={arrowDownImg} />
        </div>
        <ActionIcon
          onClick={() => {
            setNewsDialogOpen(true);
          }}
          icon={newsImg}
        />
        <div onClick={() => setNewsDialogOpen(true)} className="relative">
          <ActionIcon onClick={() => {}} icon={menuImg} />
          <div className="absolute bg-red-500 rounded-full top-0 text-xs md:px-1 text-white  -right-4">99+</div>
        </div>
        <div ref={menuRef}>
          <ActionIcon
            onClick={() => {
              setGalleryDialogOpen(true);
            }}
            icon={galleryImg}
          />
        </div>
      </div>
      <img alt="Logo" src={logoImg} />
      <div className="absolute left-[50%] top-[15%]  xl:top-4  -translate-x-1/2">
        <DateWeatherComp />
      </div>
      {isGalleryDialogOpen && (
        <Dialog closeOnOutsideClick isOpen={isGalleryDialogOpen} onClose={() => setGalleryDialogOpen(false)} position="parent" parentRef={menuRef}>
          <GalleryDialog onClose={() => setGalleryDialogOpen(false)} />
        </Dialog>
      )}

      {isNewsDialogOpen && (
        <Dialog closeOnOutsideClick isOpen={isNewsDialogOpen} onClose={() => setNewsDialogOpen(false)} position="center">
          <NewsDialogWrapper onClose={() => setNewsDialogOpen(false)} />
        </Dialog>
      )}
    </div>
  );
};

export default UpperNav;
