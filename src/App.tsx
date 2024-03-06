import './App.css'
import Main from "./components/Aplication/Main.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import React from "react";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>,
        },
    ]);
    return (
        <div className={'app'}>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
