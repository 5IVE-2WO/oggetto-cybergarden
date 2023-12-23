import Feed from "../pages/feed";
import Users from "../pages/users";
import Comunity from "../pages/comunity";
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
    component: <Comunity />,
    exact: true,
  },
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
];
