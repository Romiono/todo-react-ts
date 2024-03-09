import {ITodo} from "../../Imodels/ITodo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
    todos: ITodo[],
    isLoading: boolean,
    error: string,
}

interface creatTodo {
    title: string,
    description: string
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        creat(state,action: PayloadAction<creatTodo>) {
            state.todos.push(
                {id: state.todos.length ? state.todos[state.todos.length - 1].id + 1  : 1, checked: false, description: action.payload.description, title: action.payload.title}
            );
        },
    }
});

export default todoSlice.reducer;