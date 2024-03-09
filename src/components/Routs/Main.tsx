import React from 'react';
// import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
// import {userSlice} from "../../store/reducers/UserSlice.ts";
import TodoList from "../TofoList/TodoList.tsx";

const Main: React.FC = () => {
    // const {count} = useAppSelector(state => state.userReducer);
    // const {increment} = userSlice.actions;
    // const dispatch = useAppDispatch();
    return (
        <div className={''}>
            <div className={'flex justify-center'}>
                <TodoList/>
            </div>
        </div>
    );
};

export default Main;