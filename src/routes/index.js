import Login from '../pages/login';
import Register from '../pages/register';
import React from 'react';
import HomePage from '../pages/home';
import Blogdetail from '../pages/blogdetail';
import Profile from '../pages/profile';
import Bloghastag from '../pages/bloghastag';
import SearchResuilt from '../pages/searchresuilt/searchResuilt';

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
    },
    {
        path: '/',
        exact: true,
        main: () => <HomePage></HomePage>
    },
    {
        path: '/home',
        exact: false,
        main: () => <HomePage></HomePage>
    },
    {
        path: "/blog/:id",
        exact: false,
        main: () => <Blogdetail></Blogdetail>
    },
    {
        path: "/user/:id",
        exact: false,
        main: () => <Profile></Profile>
    },
    {
        path: "/hastag/:id",
        exact: false,
        main: () => <Bloghastag></Bloghastag>
    },
    {
        path: '/search/:keyword',
        exact: false,
        main: () => <SearchResuilt></SearchResuilt>
    }
];

export default routes;