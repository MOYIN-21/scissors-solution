import React from "react";
import Layout from "../resuables/Layout";
// import Layout from "./index"

export const ROUTES = [
    {
        path:"/",
        element: <Layout/>,
        Children:[
            {
                path: '',
                element: '<Home/>',
            },
        ]
    }
]