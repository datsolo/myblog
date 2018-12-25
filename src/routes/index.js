import Login from '../pages/login';
import Register from '../pages/register';
import React from 'react';

const routes = [
    {
        path: '/login',
        exact: false,
        main: () => <Login></Login>
    },
    {
        path: '/register',
        exact: false,
        main: () => <Register></Register>
    }
];

export default routes;