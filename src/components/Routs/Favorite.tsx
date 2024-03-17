import {todoAPI} from "../../services/TodoAPI.ts";
import TodoList from "../TofoList/TodoList.tsx";
import {memo, useMemo} from "react";
import Modal from "../../utils/modal/Modal.tsx";

const Favorite = memo( () => {
    const {data: todos} = todoAPI.useFetchAllTodosQuery(null);

    const favouriteTodos = useMemo(() =>
        todos && todos.filter(todo => todo.favorite)
    , [todos])


    return (
        <div className={'p-5'}>
            {favouriteTodos && <TodoList todos={favouriteTodos}/>}
            <Modal/>
        </div>
    );
});

export default Favorite;