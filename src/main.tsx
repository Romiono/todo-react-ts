import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./components/Aplication/Main.tsx";

const store = setupStore();

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/main',
        element: <Main/>
    },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </Provider>
)
