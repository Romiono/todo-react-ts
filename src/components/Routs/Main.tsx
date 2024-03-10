import React from 'react';
import TodoList from "../TofoList/TodoList.tsx";
import {todoAPI} from "../../services/TodoAPI.ts";

const Main: React.FC = () => {
    const {data: todos} = todoAPI.useFetchAllTodosQuery(null)
    return (
        <div className={''}>
            <div className={'flex justify-center'}>
                {todos && <TodoList todos={todos}/>}
            </div>
        </div>
    );
};

export default Main;