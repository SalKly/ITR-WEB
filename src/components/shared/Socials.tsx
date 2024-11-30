import facebookImg from "/socials/facebook.png";
import browser from "/socials/browser.png";
import github from "/socials/github.png";
import linkdin from "/socials/linkdin.png";

const Socials = () => {
  const socials = [facebookImg, browser, github, linkdin];
  return (
    <div className="flex gap-2">
      {socials.map((item, index) => {
        return (
          <div key={index} className="bg-[#19353D] w-8 h-8 flex justify-center items-center">
            <img alt={"Social media icon "} src={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
