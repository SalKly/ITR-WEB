import { useState, useEffect } from "react";
import { getCurrentLocalDateAr, getCurrentLocalHijriDateAr, getCurrentTimeAr } from "../../utils/dateTimeFormatters";
import TasksManager from "../shared/TasksManager";
import Socials from "../shared/Socials";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const time = getCurrentTimeAr(currentTime);
  const currentDate = getCurrentLocalDateAr(currentTime);
  const hijriDate = getCurrentLocalHijriDateAr(currentTime);

  const updateTime = () => {
    const now = new Date();
    setCurrentTime(now);
    const nextTick = 60000 - (now.getTime() % 60000);
    setTimeout(updateTime, nextTick);
  };

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center    text-white rounded-xl ">
      <p className="text-3xl font-semibold font-CoconNext">مرحبا بك احمد محمد !</p>
      <p className="text-4xl font-bold md:mt-2  font-CoconNext ">{time}</p>
      <div className="lg:mt-4 flex  flex-col gap-4 lg:flex-row lg:gap-32 items-center lg:items-start">
        <p className="text-2xl">{hijriDate}</p>
        <p className="text-2xl">{currentDate}</p>
      </div>
      <div className=" flex flex-col gap-4 items-center mt-4 lg:hidden">
        <TasksManager />
        <Socials />
      </div>
    </div>
  );
};

export default Clock;
