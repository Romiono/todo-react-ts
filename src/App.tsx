import './App.css'
import Main from "./components/Routs/Main.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./components/navbar/NavBar.tsx";
import Favorite from "./components/Routs/Favorite.tsx";
import Settings from "./components/Routs/Settings.tsx";
import Calender from "./components/Routs/Calender.tsx";
import TodoPage from "./components/Todo/TodoPage.tsx";
function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <NavBar/>,
            children: [
                {
                    path: '/main',
                    element: <Main/>,
                    children: [{
                        path: '/main',
                        element: <TodoPage/>
                    }]
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
