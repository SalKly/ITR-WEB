import tasksMenuImg from "/tasksMenu.png";
const TasksManager = () => {
  return (
    <div className="flex gap-2 items-center">
      <img alt="Icon of the task manager" src={tasksMenuImg} />
      <p className="text-md text-white font-bold">قائمة المهام</p>
    </div>
  );
};

export default TasksManager;
