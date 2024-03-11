import {ITodo} from "../../Imodels/ITodo.ts";
import {todoAPI} from "../../services/TodoAPI.ts";
import {useState} from "react";


const Todo = ({id, title, checked, description}: ITodo) => {
    const [complete, {}] = todoAPI.useCompleteTodoMutation();
    const [isComplete, setIsComplete] = useState(Boolean(checked))

    const completeTodo = async () => {
        setIsComplete(!isComplete);
        await complete({id, title, checked: `${isComplete ? 1 : 0}`, description})
    }

    return (
        <div className={'w-full m-2 flex justify-between'}>
            <div>
                <h6>{id}.{title}</h6>
                <p>{description}</p>
            </div>
            <input type={"checkbox"} checked={isComplete} onChange={completeTodo}/>
        </div>
    );
};

export default Todo;