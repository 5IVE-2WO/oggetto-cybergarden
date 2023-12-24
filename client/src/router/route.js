import Feed from "../pages/feed";
import People from "../pages/people";
import Community from "../pages/community";
import Login from "../pages/login/login";
import NotFound from "../pages/notFound/notFound";
import Speakers from "../pages/Speakers/Speakers";

export const adminsRoute = [
  {
    path: "/",
    component: <Feed />,
    exact: true,
  },
  {
    path: "/people",
    component: <People />,
    exact: true,
  },
  {
    path: "/people/:id",
    component: <Speakers />,
  },
  {
    path: "/community",
    component: <Community />,
    exact: true,
  },
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
  {
    path: "*",
    component: <NotFound />,
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
    path: "/people",
    component: <People />,
    exact: true,
  },
  {
    path: "/people/:id",
    component: <Speakers />,
  },
  {
    path: "/community",
    component: <Community />,
    exact: true,
  },
  {
    path: "/login",
    component: <Login />,
    exact: true,
  },
  {
    path: "*",
    component: <NotFound />,
    exact: true,
  },
];
