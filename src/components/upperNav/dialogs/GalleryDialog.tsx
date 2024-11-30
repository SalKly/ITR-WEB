import { useState } from "react";
import { GalleryPicker } from "../../shared/GalleryPicker";
import { useThemeDataContext } from "../../../context/ThemeContext";
import Button from "../../shared/Button";

export const GalleryDialog = ({ onClose }: { onClose: () => void }) => {
  const { setTheme, currentTheme, appThemesThumbnails } = useThemeDataContext();
  const [selectedImage, setSelectedImage] = useState(currentTheme);

  return (
    <div className="bg-[#F1F5F9] lg:w-[28rem]   pr-3 flex flex-col  rounded-xl">
      <p className="text-xl pt-3  text-textDark ">الخلفيات</p>
      <GalleryPicker selectedImg={selectedImage} allThemes={appThemesThumbnails} onSelect={(theme) => setSelectedImage(theme)} />
      <div className="flex  pt-10  pb-4 justify-center gap-4">
        <Button
          text="تعيين الخلفيه"
          onclick={() => {
            setTheme(selectedImage);
          }}
        />
        <Button
          variant="secondary"
          text="الغاء"
          onclick={() => {
            onClose();
          }}
        />
      </div>
    </div>
  );
};
