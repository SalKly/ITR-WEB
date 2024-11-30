import { twMerge } from "tailwind-merge";
import bagImg from "/lowerNav/bag.png";
import checkListImg from "/lowerNav/checkList.png";
import graphImg from "/lowerNav/graph.png";
import peopleImg from "/lowerNav/people.png";
import settingsImg from "/lowerNav/settings.png";

const LowerNavBar = () => {
  const navBarItems = [
    {
      icon: settingsImg,
      gradient: "bg-gradient-blue",
      name: "ERP System",
    },
    {
      icon: checkListImg,
      gradient: "bg-gradient-green",
      name: "ERP System",
    },
    {
      icon: peopleImg,
      gradient: "bg-gradient-red",
      name: "ERP System",
    },
    {
      icon: bagImg,
      gradient: "bg-gradient-orange",
      name: "ERP System",
    },
    {
      icon: graphImg,
      gradient: "bg-gradient-teal",
      name: "ERP System",
    },
  ];
  return (
    <div className="glassyEffect-gray pt-4 pb-2 px-4  flex gap-4 md:gap-9 rounded-2xl">
      {navBarItems.map((item, index) => {
        return (
          <div
            className={twMerge("w-12 h-12 rounded-lg flex justify-center items-center", item.gradient)}
            key={index}
            data-tooltip-content={item.name}
            data-tooltip-id="tooltip"
          >
            <img alt="Image of the navbar" src={item.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default LowerNavBar;
