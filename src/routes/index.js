import Login from '../pages/login';
import Register from '../pages/register';
import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Blog from '../components/blog';
import HomePage from '../pages/home';
import Blogdetail from '../pages/blogdetail';

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
    }
];

export default routes;