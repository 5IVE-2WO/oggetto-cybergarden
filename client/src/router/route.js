import Feed from "../pages/feed";
import Users from "../pages/users";
import Community from "../pages/community";
import Login from "../pages/login/login";

export const route = [
  {
    path: "/",
    component: <Feed />,
    exact: true,
  },
  {
    path: "/users",
    component: <Users />,
    exact: true,
  },
  {
    path: "/comunity",
    component: <Community />,
    exact: true,
  },
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
];
