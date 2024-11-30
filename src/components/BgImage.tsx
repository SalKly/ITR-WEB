import { useState } from "react";
import { useThemeDataContext } from "../context/ThemeContext";

const BgImage = () => {
  const { currentTheme, actions } = useThemeDataContext();
  const { getThumbnail } = actions;
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const placeholderImage = getThumbnail(currentTheme);

  return (
    <div className="absolute w-[100vw] h-[100vh] z-10">
      <img
        className={`object-cover w-[100vw] h-[100vh] transition-opacity duration-300 ease-in-out ${isLoading ? "opacity-0" : "opacity-100"}`}
        src={isLoading ? placeholderImage : currentTheme}
        alt="Background"
        onLoad={handleImageLoad}
        loading="lazy"
      />
    </div>
  );
};

export default BgImage;
