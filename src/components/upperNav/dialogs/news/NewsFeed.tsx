import { useEffect, useRef, useState } from "react";
import { useNews } from "../../../../hooks/newsHooks";
import { Spinner } from "../../../shared/Spinner";
import ErrorComp from "../../../shared/ErrorComp";
import NewsItem from "./NewsItem";
import Carousel from "./Carousel";

export default function NewsFeed({ setSelectedId }: { setSelectedId: (id: number) => void }) {
  const { mostRecentNews, archivedNews, isReadyToFetchNextPage, isError, isLoading, isFetching, isRefetching, actions } = useNews();
  const { fetchNextPage } = actions;
  const intObserver = useRef<IntersectionObserver | null>(null);
  const [observerTarget, setObserverTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!observerTarget || isFetching) return;
    if (intObserver.current) intObserver.current.disconnect();
    intObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isReadyToFetchNextPage) {
        fetchNextPage();
      }
    });

    if (observerTarget) intObserver.current.observe(observerTarget);

    return () => {
      if (intObserver.current) intObserver.current.disconnect();
    };
  }, [observerTarget, isFetching, fetchNextPage, isReadyToFetchNextPage]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorComp onRetry={actions.refetch} />;
  }

  return (
    <div>
      <div className=" flex justify-center">
        <Carousel data={mostRecentNews} />
      </div>

      <div className="space-y-4 mt-8">
        <p className="text-base text-white">اخر الاخبار</p>
        {archivedNews.map((news, index) => (
          <div key={news.id} onClick={() => setSelectedId(news.id)}>
            <NewsItem ref={index === archivedNews.length - 1 ? (el) => setObserverTarget(el) : null} data={news} />
          </div>
        ))}
      </div>

      {isFetching || isRefetching ? (
        <div className="flex justify-center mt-4">
          <Spinner />
        </div>
      ) : null}

      {!isReadyToFetchNextPage && !isFetching && <div className="text-center text-white mt-4">No more news to load</div>}
    </div>
  );
}
