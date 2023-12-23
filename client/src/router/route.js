import Feed from "../pages/feed";
import Users from "../pages/users";
import Comunity from "../pages/comunity";
import Login from "../pages/login/login";

export const adminsRoute = [
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

export const guestRoute = [
  {
    path: "/",
    component: <Feed />,
    exact: true,
  },
  {
    path: "*",
    component: <Login />,
    exact: true,
  },
];

export const userRoute = [
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
