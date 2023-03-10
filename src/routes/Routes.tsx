import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Authentication from '../pages/Authentication/Authentication';
import Candidates from '../pages/Candidates/Candidates';
import Error from '../pages/Error/Error';
import Root from "../pages/Root/Root";
import CandidatesView from "../pages/Candidates/View/CandidatesView";
import CandidatesActions from "../pages/Candidates/Actions/CandidatesActions";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Candidates/>,
        children: [
            {
                path: './home',
                element: <Home/>,
            },
            {
                path: './candidates',
                element: <Candidates/>,
                children: [
                    {
                        path: './view',
                        element: <CandidatesView/>
                    },
                    {
                        path: './actions',
                        element: <CandidatesActions/>
                    }
                ],
            },
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
