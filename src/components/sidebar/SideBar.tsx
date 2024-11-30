import ActionIcon from "../upperNav/ActionIcon";
import FolderComp from "./FolderComp";
import searchImg from "/sidebar/search.png";
import folderImg from "/sidebar/folder.png";
import exitImg from "/exit.png";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const SideBar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const sidebarFolders = ["الرؤية", "الرسالة", "القيم", "الغيايات"];
  return (
    <>
      <div
        className={twMerge(
          " transition-all duration-200   z-20 w-[85px] rounded-l-lg   py-4   gap-6  px-2 absolute right-0   translate-y-[-50%] top-[50%] min-h-[366px] glassyEffect-lg  flex flex-col items-center text-white",
          openSideBar && "flex w-[200px] translate-x-0 opacity-100",
          !openSideBar && " translate-x-[100%] opacity-0 pointer-events-none md:translate-x-0 md:opacity-100 md:pointer-events-auto"
        )}
      >
        <img
          alt="X icon to close the sidebar in small views"
          onClick={() => setOpenSideBar(false)}
          className=" absolute left-2  md:hidden"
          src={exitImg}
        />
        <img alt="Search icon" className=" cursor-pointer" src={searchImg} />
        <h3 className=" text-base   font-semibold  ">الخدمات الذاتيه</h3>
        {sidebarFolders.map((item, index) => {
          return <FolderComp folderName={item} key={index} />;
        })}
      </div>
      {!openSideBar && (
        <div className=" z-20  md:hidden rounded-l-lg   py-4   gap-6  px-2 absolute right-0   translate-y-[-50%] top-[50%]  glassyEffect-lg  text-white">
          <ActionIcon icon={folderImg} onClick={() => setOpenSideBar(true)} />
        </div>
      )}
    </>
  );
};

export default SideBar;
