import './App.css'
import Main from "./components/Aplication/Main.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.tsx";
import Favorite from "./components/Aplication/Favorite.tsx";
import Settings from "./components/Aplication/Settings.tsx";
import Calender from "./components/Aplication/Calender.tsx";
// import React from "react";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <NavBar/>,
            children: [
                {
                    path: '/main',
                    element: <Main/>
                },
                {
                    path: '/favorite',
                    element: <Favorite/>
                },
                {
                    path: '/settings',
                    element: <Settings/>
                },
                {
                    path: '/Calender',
                    element: <Calender/>
                },
            ],
        },
    ]);
    return (
        <div className={'app'}>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
