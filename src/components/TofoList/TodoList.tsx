import Todo from "../Todo/Todo.tsx";
import { useState} from "react";
import {todoAPI} from "../../services/TodoAPI.ts";
import {ITodo} from "../../Imodels/ITodo.ts";

interface todoArr {
    todos: ITodo[];
}
const TodoList = ({todos} : todoArr) => {
    // const {data: todos, isLoading, error} = todoAPI.useFetchAllTodosQuery(null);
    const [creatTodo, {}] = todoAPI.useCreateTodoMutation();
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        checked: false,
    });


    const creatTodos = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await creatTodo(todo as ITodo);
    }

    return (
        <div>
            {todos && todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description}
                                     checked={todo.checked}/>)}
            <form className={'flex-col flex'}>
                <label>title</label>
                <input onChange={(e) => setTodo({
                    description: todo.description,
                    title: e.target.value,
                    checked: false
                })}/>
                <label>description</label>
                <input onChange={(e) => setTodo({
                    description: e.target.value,
                    title: todo.title,
                    checked: false
                })}/>

                <button onClick={creatTodos}>создать туду
                </button>
            </form>
        </div>
    );
};

export default TodoList;