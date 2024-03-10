import {todoAPI} from "../../services/TodoAPI.ts";
import TodoList from "../TofoList/TodoList.tsx";
import {memo, useMemo} from "react";

const Favorite = memo( () => {
    const {data: todos} = todoAPI.useFetchAllTodosQuery(null);

    const favouriteTodos = useMemo(() =>
        todos && todos.filter(todo => todo.favorite)
    , [todos])


    return (
        <div>
            {favouriteTodos && <TodoList todos={favouriteTodos}/>}
        </div>
    );
});

export default Favorite;