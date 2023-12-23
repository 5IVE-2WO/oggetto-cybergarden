import React from 'react';
import {Route, Routes} from "react-router-dom";
import {route} from "./route";

const AppRouter = () => {
    return (
        <Routes>
            {route.map(route =>
                <Route path={route.path} element={route.component} exact={route.path}/>
            )}
        </Routes>
    );
};

export default AppRouter;