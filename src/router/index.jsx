import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import Home from '@pages/home/home';
import Showroom from '@pages/showroom/showroom';
import Blog from '@pages/blog/blog';
import Contact from '@pages/contact/contact';
import Profile from '@pages/profile/profile';
import Login from '@pages/login/login';
import Register from '@pages/register/register';
import NotFound from '@pages/not-found/not-found';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'showroom',
                element: <Showroom />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'contact-us',
                element: <Contact />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export { router };
