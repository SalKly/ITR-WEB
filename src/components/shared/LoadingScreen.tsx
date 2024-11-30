import { Spinner } from "./Spinner";

const LoadingScreen = () => {
  return (
    <div className="w-[100%] h-[100%] flex  items-center justify-center">
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
