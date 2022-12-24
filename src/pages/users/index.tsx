import UserList from "components/user-list";
import { Suspense } from "react";

export default function Users() {
  return (
    <div>
      <Suspense fallback={<p>Loading User List Component</p>}>
        <UserList />
      </Suspense>
    </div>
  );
}
