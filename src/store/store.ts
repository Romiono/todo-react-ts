import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import modalReducer from './reducers/ModalSlice';
import {todoAPI} from "../services/TodoAPI.ts";
import curentTodoReducer from './reducers/CurentTodoSlice.ts'

const rootReducer = combineReducers({
    userReducer,
    modalReducer,
    curentTodoReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(todoAPI.middleware)
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
