import { useUser, useUsers } from "hooks/useUsers";
import { UserProps } from "interfaces";
import { FC, use } from "react";
import BlurImage from "./blur-image";

const UserList = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="grid xl:grid-cols-5 gap-4">
      {users?.map((user) => (
        <UserItem {...user} />
      ))}
    </div>
  );
};

const UserItem: FC<UserProps> = (user) => {
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-lg">
      <BlurImage src={user.image} />
      <ul className="mt-4 text-sm flex flex-col gap-1">
        <h2 className="font-medium text-heading">
          {user.firstName + " " + user.lastName}
        </h2>
        <p>{user.email}</p>
      </ul>
    </div>
  );
};

export default UserList;
