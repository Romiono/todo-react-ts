import {ITodo} from "../../Imodels/ITodo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
    todos: ITodo[],
    isLoading: boolean,
    error: string,
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        creat(state,action: PayloadAction<ITodo>) {
            state.todos.push(action.payload);
        },
    }
});

export default todoSlice.reducer;