import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITodo} from "../Imodels/ITodo.ts";
// import {IResponse} from "../Imodels/IResponse.ts";


export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Todos'],
    endpoints:(build) => ({
        fetchAllTodos: build.query<ITodo[], void>({
            query: () => ({
                url: '/todos'
            }),
            providesTags: () => ['Todos']
        }),
        fetchTodoId: build.query<ITodo, number>({
            query :(id) =>  ({
                url: `todos/${id}`
            }),
            providesTags: () => ['Todos']
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        completeTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        handleFavorite: build.mutation<ITodo, ITodo>({
            query: (todo) =>  ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        addTitle: build.mutation<ITodo, ITodo>({
            query: ({id, ...patch}) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
                body: patch
            }),
            invalidatesTags: ['Todos']

        }),
        deleteTodo: build.mutation<number, number>({
            query: (id: number) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todos']
        })
    })
})