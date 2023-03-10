import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Authentication from '../pages/Authentication/Authentication';
import Candidate from '../pages/Candidate/Candidate';
import Error from '../pages/Error/Error';
import Root from "../pages/Root/Root";
import CandidateView from "../pages/Candidate/View/CandidateView";
import CandidateActions from "../pages/Candidate/Actions/CandidateActions";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: './home',
                element: <Home/>,
            },
            {
                path: './candidates',
                element: <Candidate/>,
                children: [
                    {
                        path: './view',
                        element: <CandidateView/>
                    },
                    {
                        path: './actions',
                        element: <CandidateActions/>
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
