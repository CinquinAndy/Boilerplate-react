import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Authentication from '../pages/Authentication/Authentication';
import Candidate from '../pages/Candidate/Candidate';
import Error from '../pages/Error/Error';
import Root from "../pages/Root/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Candidate/>,
        children: [
            {
                path: './home',
                element: <Home/>,
            },
            {
                path: './candidates',
                element: <Candidate/>,

            }
        ],
    },
    {
        path: '/auth',
        element: <Authentication/>,
    },
]);

export default function Routes() {
    return <>
        <RouterProvider router={router}/>
    </>
}
