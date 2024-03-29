import Todo from "../Todo/Todo.tsx";
import {ITodo} from "../../Imodels/ITodo.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {modalSlice} from "../../store/reducers/ModalSlice.ts";
import {memo} from "react";

interface todoArr {
    todos: ITodo[];
}


const TodoList = memo(({todos} : todoArr) => {
    const dispatch = useAppDispatch();
    const newTodo = () => {
        console.log('new')
        dispatch(modalSlice.actions.handlerModal(true));
    }

    return (
        <div>
            {todos && todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
            <button onClick={newTodo} className={'rounded-full w-16 h-16 text-xl fixed bottom-10 right-10'}>+</button>
        </div>
    );
});

export default TodoList;