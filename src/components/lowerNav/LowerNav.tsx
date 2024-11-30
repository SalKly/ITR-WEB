import Socials from "../shared/Socials";
import TasksManager from "../shared/TasksManager";
import LowerNavBar from "./LowerNavBar";

const LowerNav = () => {
  return (
    <div className=" flex justify-between items-center pb-4  md:pb-8 md:px-12  ">
      <div>
        <div className=" hidden lg:visible">
          <Socials />
        </div>
      </div>
      <div>
        <LowerNavBar />
      </div>
      <div>
        <div className=" hidden lg:visible">
          <TasksManager />
        </div>
      </div>
    </div>
  );
};

export default LowerNav;
