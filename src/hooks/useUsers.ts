import { UserProps } from "interfaces";
import useSWR from "swr";

const fetcher = async (args: any) => {
  const response = await fetch(args);
  const data = await response.json();
  return data.users;
};

const fetcherUser = async (args: any) => {
  const response = await fetch(args);
  return await response.json();
};

export const useUsers = () => {
  const { data, error, isLoading } = useSWR<UserProps[]>(
    "https://dummyjson.com/users",
    fetcher
  );

  return { users: data, error, isLoading };
};

export const useUser = (id: any) => {
  const { data, error, isLoading } = useSWR<any>(
    `https://dummyjson.com/users/${id}`,
    fetcherUser
  );
  return { user: data, error, isLoading };
};
