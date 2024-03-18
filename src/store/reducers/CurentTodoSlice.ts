import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICurentTodoSlice {
    id: number
}

const initialState: ICurentTodoSlice = {
    id: 0
}

export const curentTodoSlice = createSlice({
    name: 'curentTodo',
    initialState,
    reducers: {
        choose(state, action: PayloadAction<number>){
            state.id = action.payload
        }
    }
});

export default curentTodoSlice.reducer;