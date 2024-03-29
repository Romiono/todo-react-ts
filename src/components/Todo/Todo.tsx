import {ITodo} from "../../Imodels/ITodo.ts";
import {todoAPI} from "../../services/TodoAPI.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {curentTodoSlice} from "../../store/reducers/CurentTodoSlice.ts";

interface ILocalTodo {
    todo: ITodo
}
const Todo = ({todo}: ILocalTodo) => {
    const dispatch = useAppDispatch();
    const [complete, {error: errorComplite}] = todoAPI.useCompleteTodoMutation();
    const [isFavorite, {error: errorFavorite}] = todoAPI.useHandleFavoriteMutation();
    const [isDelete, {error: errorDelete}] = todoAPI.useDeleteTodoMutation();
    const completeTodo = async () => {
        try {
            await complete({...todo, checked: !todo.checked});
        } catch {
            console.log(errorComplite);
        }
    }

    const handleFavorite = async () => {
        try {
            await isFavorite({...todo, favorite: !todo.favorite});
        } catch {
            console.log(errorFavorite);
        }
    }

    const deleteTodo = async () => {
        try {
            await isDelete(todo.id);
        }
        catch {
            console.log(errorDelete);
        }
    }

    const chooseTodo = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        dispatch(curentTodoSlice.actions.choose(todo.id))
    }

    return (
        <div onClick={chooseTodo} className={'w-full m-2 flex justify-between bg-neutral-800 p-5 rounded-2xl outline-gray-50 transition-all'}>
            <div className={'flex flex-col justify-center items-start'}>
                <h6 className={'font-bold text-2xl'}>{todo.title}</h6>
                {todo.description && <p className={'text-xl'}>{todo.description}</p>}
            </div>
            <div className={'flex gap-x-5'}>
                <input type={"checkbox"} checked={todo.checked} onChange={completeTodo}/>
                <button onClick={handleFavorite}>{todo.favorite ? 'remove from favorite' : 'add in favorite'}</button>
                <button onClick={deleteTodo}>delete</button>

            </div>
        </div>
    );
};

export default Todo;