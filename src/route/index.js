import React from "react";
import Home from "../component/Home";
import Layout from "../Layout/Layout";
import MyUrl from "../Pages/MyURLs";
import FAQs from "../Pages/FAQs";
import Pricing from "../Pages/Pricing";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";


export const ROUTES = [
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path: '',
                element: <Home/>,
            },

            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'url',
                element: <MyUrl/>,
            },
            {
                path: 'faqs',
                element: <FAQs/>,
            },
            {
                path: 'price',
                element: <Pricing/>,
            },
        
        ]
    },
    {
        path: 'signUp',
        element: <SignUp/>,
    },
    {
        path: 'logIn',
        element: <LogIn/>,
    },
]