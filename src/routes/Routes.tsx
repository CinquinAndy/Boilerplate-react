import React from 'react';
// Routes
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Authentication from "../pages/Authentication/Authentication";
import Candidates from "../pages/Candidates/Candidates";

// Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Authentication/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/candidates",
        element: <Candidates/>
    },
]);

export default function Routes() {
    return (
        <RouterProvider router={router}/>
    );
}
