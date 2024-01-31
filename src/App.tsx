import './App.css'
import {userSlice} from "./store/reducers/UserSlice.ts";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import NavBar from "./components/navbar/NavBar.tsx";

function App() {
    const {count} = useAppSelector(state => state.userReducer);
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className={'app'}>
            <NavBar/>
            <div style={{display: 'flex', justifyContent: 'center'}}><h1>{count}</h1>
                <button onClick={() => dispatch(increment(5))}>increment</button>
            </div>
        </div>
    )
}

export default App
