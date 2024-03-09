import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import todoReducer from "./reducers/TodoSlice";
import {todoAPI} from "../services/TodoAPI.ts";

const rootReducer = combineReducers({
    userReducer,
    todoReducer,
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
