import React from 'react';
import NavBar from "../navbar/NavBar.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {userSlice} from "../../store/reducers/UserSlice.ts";

const Main: React.FC = () => {
    const {count} = useAppSelector(state => state.userReducer);
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className={'p-0 columns-3'}>
            <NavBar/>
            <div style={{display: 'flex', justifyContent: 'center'}}><h1>{count}</h1>
                <button onClick={() => dispatch(increment(5))}>increment</button>
            </div>
        </div>
    );
};

export default Main;