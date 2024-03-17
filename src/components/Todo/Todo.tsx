import {ITodo} from "../../Imodels/ITodo.ts";
import {todoAPI} from "../../services/TodoAPI.ts";


const Todo = ({id, title, checked, description, favorite}: ITodo) => {
    const [complete, {error: errorComplite}] = todoAPI.useCompleteTodoMutation();
    const [isFavorite, {error: errorFavorite}] = todoAPI.useHandleFavoriteMutation();
    const [isDelete, {error: errorDelete}] = todoAPI.useDeleteTodoMutation();
    const completeTodo = async () => {
        try {
            await complete({id, title, checked: !checked, description, favorite});
        } catch {
            console.log(errorComplite);
        }
    }

    const handleFavorite = async () => {
        try {
            await isFavorite({id, title, checked, description, favorite: !favorite});
        } catch {
            console.log(errorFavorite);
        }
    }

    const deleteTodo = async () => {
        try {
            await isDelete(id);
        }
        catch {
            console.log(errorDelete);
        }
    }

    return (
        <div className={'w-full m-2 flex justify-between bg-neutral-800 p-5 rounded-2xl outline-gray-50 transition-all'}>
            <div className={'flex flex-col justify-center items-start'}>
                <h6 className={'font-bold text-2xl'}>{title}</h6>
                {description && <p className={'text-xl'}>{description}</p>}
            </div>
            <div className={'flex gap-x-5'}>
                <input type={"checkbox"} checked={checked} onChange={completeTodo}/>
                <button onClick={handleFavorite}>{favorite ? 'remove from favorite' : 'add in favorite'}</button>
                <button onClick={deleteTodo}>delete</button>

            </div>
        </div>
    );
};

export default Todo;