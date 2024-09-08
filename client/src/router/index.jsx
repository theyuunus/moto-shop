import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import Home from '../pages/home/home';
import Showroom from '../pages/showroom/showroom';
import Details from '../pages/details/details';
import Blog from '../pages/blog/blog';
import Contact from '../pages/contact/contact';
import Profile from '../pages/profile/profile';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import NotFound from '../pages/not-found/not-found';
import Design from '../pages/design/design';

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
                path: `showroom/details/:id`,
                element: <Details />
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
                path: 'design',
                element: <Design />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export { router };
