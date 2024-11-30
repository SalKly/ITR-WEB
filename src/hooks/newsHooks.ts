import axios from "axios";
import { useMemo } from "react";
import { useZodParser } from "./useZodParser";
import { NewArraySchema, NewSchema, NewType } from "../models/News";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useInfiniteQuery,
  useQuery,
} from "react-query";

type useNewsHook = {
  mostRecentNews: NewType[];
  archivedNews: NewType[];
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  hasNextPage?: boolean;
  isReadyToFetchNextPage: boolean;
  actions: {
    fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<any, unknown>>;
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>;
  };
};
const MOST_RECENT_COUNT = 4;

export const useNews = (): useNewsHook => {
  const { triggerParser } = useZodParser();
  const { data, isError, isLoading, refetch, hasNextPage, fetchNextPage, isFetching, isRefetching } = useInfiniteQuery({
    queryKey: "fetchNews",
    queryFn: async ({ pageParam = 1, signal }) => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: pageParam,
        },
        signal,
      });
      const parsedData = triggerParser(data, NewArraySchema);
      return parsedData;
    },
    getNextPageParam: (lastPage, allPages) => (lastPage.length === 0 ? undefined : allPages.length + 1),
  });

  const allNews = useMemo(() => data?.pages.map((data) => data).flat() || [], [data?.pages]);

  const mostRecentNews = useMemo(() => allNews.slice(0, MOST_RECENT_COUNT), [allNews]);

  const archivedNews = useMemo(() => allNews.slice(MOST_RECENT_COUNT), [allNews]);

  const isReadyToFetchNextPage = (hasNextPage && !isError && !isFetching && !isRefetching) || false;

  return {
    mostRecentNews,
    archivedNews,
    isReadyToFetchNextPage,
    isError,
    isLoading,
    isRefetching,
    hasNextPage,
    isFetching,
    actions: {
      fetchNextPage,
      refetch,
    },
  };
};

type useNewByIdHook = {
  currentNewData?: NewType;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isRefetching: boolean;
  actions: {
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<
      QueryObserverResult<
        {
          image: string;
          publishedAt: string;
          id: number;
          title: string;
          body?: string | undefined;
        },
        unknown
      >
    >;
  };
};

export const useNewById = (id: string): useNewByIdHook => {
  const { triggerParser } = useZodParser();
  const { data, isError, isLoading, refetch, isFetching, isRefetching } = useQuery(["newsItem", id], async ({ signal }) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal });
    const parsedData = triggerParser(data, NewSchema);
    return parsedData;
  });
  return {
    currentNewData: data,
    isError: isError,
    isLoading: isLoading,
    isFetching: isFetching,
    isRefetching: isRefetching,
    actions: {
      refetch: refetch,
    },
  };
};
