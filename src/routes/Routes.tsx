import React from 'react';
// Routes
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Authentication from "../pages/Authentication/Authentication";
import Candidates from "../pages/Candidates/Candidates";
import Error from "../pages/Error/Error";

// Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Authentication/>,
        errorElement: <Error/>
    },
    {
        path: "/home",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/candidates",
        element: <Candidates/>,
        errorElement: <Error/>
    },
]);

export default function Routes() {
    return (
        <RouterProvider router={router}/>
    );
}
