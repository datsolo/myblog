import Login from '../pages/login';
import Register from '../pages/register';
import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Blog from '../components/blog';
import HomePage from '../pages/home';

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
        path: '/test',
        exact: false,
        main: () => <Footer></Footer>
    },
    {
        path: "/blog",
        exact: false,
        main: () => <Blog></Blog>
    }
];

export default routes;