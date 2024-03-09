import {ITodo} from "../../Imodels/ITodo.ts";


const Todo = ({id, title, checked, description}: ITodo) => {
    return (
        <div className={'w-full m-2 flex justify-between'}>
            <div>
                <h6>{id}.{title}</h6>
                <p>{description}</p>
            </div>
            <input type={"checkbox"} checked={checked}/>
        </div>
    );
};

export default Todo;