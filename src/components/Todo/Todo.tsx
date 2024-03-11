import {ITodo} from "../../Imodels/ITodo.ts";
import {todoAPI} from "../../services/TodoAPI.ts";


const Todo = ({id, title, checked, description, favorite}: ITodo) => {
    const [complete, {error: errorComplite}] = todoAPI.useCompleteTodoMutation();
    const [isFavorite,{error: errorFavorite}] = todoAPI.useHandleFavoriteMutation();

    const completeTodo = async () => {
        try {
            await complete({id, title, checked: !checked, description, favorite});
        }
        catch {
            console.log(errorComplite)
        }
    }

    const handleFavorite = async () => {
        try {
            await isFavorite({id, title, checked, description, favorite: !favorite})
        }
        catch  {
            console.log(errorFavorite)
        }
    }

    return (
        <div className={'w-full m-2 flex justify-between'}>
            <div>
                <h6>{id}.{title}</h6>
                <p>{description}</p>
            </div>
            <button onClick={handleFavorite}>{favorite ? 'remove from favorite' : 'add in favorite'}</button>
            <input type={"checkbox"} checked={checked} onChange={completeTodo}/>
        </div>
    );
};

export default Todo;