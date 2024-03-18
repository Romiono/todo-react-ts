import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IModel {
    isOpen: boolean,
}

const initialState :IModel = {
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handlerModal(state, action: PayloadAction<boolean>){
            state.isOpen = action.payload
        }
    }
});

export default modalSlice.reducer;