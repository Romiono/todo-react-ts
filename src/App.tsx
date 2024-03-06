import './App.css'
import Main from "./components/Aplication/Main.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.tsx";
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
