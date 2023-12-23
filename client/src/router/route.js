import Feed from "../pages/feed";
import Users from "../pages/users";

export const route = [
    {
        path: '/',
        component: <Feed/>,
        exact: true
    },
    {
        path: '/users',
        component: <Users/>,
        exact: true
    },
]