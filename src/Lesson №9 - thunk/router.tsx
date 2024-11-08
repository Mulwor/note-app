import { createBrowserRouter, Link, Outlet, redirect } from "react-router-dom";
import { store } from "./store";
import { UsersList } from "./users/users-list";
import { fetchUsers } from "./users/model/fetch-users";
import { fetchUser } from "./users/model/fetch-user";
import { UserInfo } from "./users/user-info";
import { Counters } from "./counters/counters";


const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="container p-5 flex flex-col gap-5">
        <header className="py-5 flex gap-4">
          <Link to="users">Users</Link>
          <Link to="counters">Counters</Link>
        </header>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("/users"),
      },
      {
        path: "users",
        element: <UsersList />,
        loader: () => {
          loadStore().then(() => {
            store.dispatch(fetchUsers());
          });
          return null;
        },
      },
      {
        path: "users/:id",
        element: <UserInfo />,
        loader: ({ params }) => {
          loadStore().then(() => {
            store.dispatch(fetchUser(params.id ?? ""));
          });
          return null;
        },
      },
      {
        path: "counters",
        element: <Counters />,
      },
    ],
  },
]);