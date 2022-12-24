import useSWR from "swr";

const fetcher = async (args: any) => {
  const response = await fetch(args);
  const data = await response.json();
  return data.posts;
};

export const usePosts = () => {
  const { data, error, isLoading } = useSWR<any>(
    "https://dummyjson.com/posts",
    fetcher
  );

  return { posts: data, error, isLoading };
};
