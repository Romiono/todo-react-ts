import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITodo} from "../Imodels/ITodo.ts";


export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints:(build) => ({
        fetchAllTodos: build.query<ITodo[], null>({
            query: () => ({
                url: '/todos'
            }),
            providesTags: result => ['Todos']
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todos']
        })
    })
})