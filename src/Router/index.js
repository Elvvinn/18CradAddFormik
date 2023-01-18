
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddPage from "../Pages/AddPage/add";
import HomePage from "../Pages/HomePage/homepage";
import StorePage from "../Pages/StorePage/store";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/store/:id",
        element: <StorePage />,
    },
    {
        path: "/add",
        element: <AddPage />,
    },

]);

export default router;
