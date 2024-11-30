import { Dispatch, SetStateAction } from "react";
import bgImg1 from "/backgrounds/bg1.png";
import bgImg2 from "/backgrounds/bg2.png";
import bgImg3 from "/backgrounds/bg3.png";
import bgImg1LQ from "/backgrounds/bg1.webp";
import bgImg2LQ from "/backgrounds/bg2.webp";
import bgImg3LQ from "/backgrounds/bg3.webp";
import { useLocalStorage } from "./useLocalStorage";

export type ThemeHook = {
  allThemes: string[];
  setTheme: Dispatch<SetStateAction<string>>;
  currentTheme: string;
  appThemesThumbnails: { img: string; thumbnail: string }[];
  actions: {
    getThumbnail: (img: string) => string | undefined;
  };
};

export function useTheme(): ThemeHook {
  const appThemesThumbnails = [
    {
      img: bgImg1,
      thumbnail: bgImg1LQ,
    },
    {
      img: bgImg2,
      thumbnail: bgImg2LQ,
    },
    {
      img: bgImg3,
      thumbnail: bgImg3LQ,
    },
    {
      img: bgImg1,
      thumbnail: bgImg1LQ,
    },
    {
      img: bgImg2,
      thumbnail: bgImg2LQ,
    },
    {
      img: bgImg3,
      thumbnail: bgImg3LQ,
    },
    {
      img: bgImg1,
      thumbnail: bgImg1LQ,
    },
  ];
  const appThemes = [bgImg1, bgImg2, bgImg3, bgImg1, bgImg2, bgImg3, bgImg1, bgImg2, bgImg3, bgImg1, bgImg2, bgImg3];

  const [currentTheme, setCurrentTheme] = useLocalStorage<string>({ key: "bgTheme", initialValue: appThemes[0] });
  const getThumbnail = (img: string) => {
    return appThemesThumbnails.find((data) => data.img == img)?.thumbnail;
  };

  return {
    allThemes: appThemes,
    setTheme: setCurrentTheme,
    currentTheme,
    appThemesThumbnails,
    actions: {
      getThumbnail,
    },
  };
}
