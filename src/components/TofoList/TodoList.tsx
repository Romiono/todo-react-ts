import Todo from "../Todo/Todo.tsx";
import {ITodo} from "../../Imodels/ITodo.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {modalSlice} from "../../store/reducers/ModalSlice.ts";

interface todoArr {
    todos: ITodo[];
}


const TodoList = ({todos} : todoArr) => {
    const dispatch = useAppDispatch();
    const newTodo = () => {
        console.log('new')
        dispatch(modalSlice.actions.handlerModal(true));
    }

    return (
        <div>
            {todos && todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description}
                                     checked={todo.checked} favorite={todo.favorite}/>)}
            <button onClick={newTodo} className={'rounded-full w-16 h-16 text-xl fixed bottom-10 right-10'}>+</button>
        </div>
    );
};

export default TodoList;