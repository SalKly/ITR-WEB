import { useNewById } from "../../../../hooks/newsHooks";
import { getCurrentLocalDateAr } from "../../../../utils/dateTimeFormatters";
import ErrorComp from "../../../shared/ErrorComp";
import { Spinner } from "../../../shared/Spinner";

const SelectedNewsItem = ({ selectedId }: { selectedId: number }) => {
  const { currentNewData, isError, isFetching, isLoading, isRefetching, actions } = useNewById(selectedId + "");
  const { refetch } = actions;
  const loading = isLoading || isFetching || isRefetching;
  if (loading) {
    return <Spinner />;
  }

  if (isError || !currentNewData) {
    return <ErrorComp onRetry={refetch} />;
  }

  return (
    <div>
      <img alt={`News image for the topic of ${currentNewData.title}`} className="w-[100%] h-[200px]" src={currentNewData?.image} />
      <div className="w-[80%] mt-4 flex flex-col gap-2">
        <p className=" text-textGray text-xs ">{getCurrentLocalDateAr(new Date(currentNewData.publishedAt))}</p>
        <p className=" text-base text-white ">{currentNewData.title}</p>
        <p className="text-sm text-textGray">{currentNewData.body}</p>
      </div>
    </div>
  );
};

export default SelectedNewsItem;
