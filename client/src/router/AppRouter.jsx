import React from 'react';
import {Route, Routes} from "react-router-dom";
import {adminsRoute, userRoute, guestRoute} from "./route";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const authState = useSelector(state => state.auth)
    console.log(authState.authLevel)
    switch (authState.authLevel) {
        case 1:
            return (
                <Routes>
                    {guestRoute.map(route => <Route path={route.path} element={route.component} exact={route.path}/>)}
                </Routes>
            )

        case 2:
            return (
                <Routes>
                    {userRoute.map(route => <Route path={route.path} element={route.component} exact={route.path}/>)}
                </Routes>
            )

        case 3:
            return (
                <Routes>
                    {adminsRoute.map(route => <Route path={route.path} element={route.component} exact={route.path}/>)}
                </Routes>
            )
        default:
            return (
                <Routes>
                    <Route path="*" element={guestRoute[1].component}/>
                </Routes>
            )
    }
};

export default AppRouter;