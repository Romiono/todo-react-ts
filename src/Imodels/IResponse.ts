import {ITodo} from "./ITodo.ts";

export interface IResponse {
    data: ITodo[],
    pages: number,
    last: number,
    next: number,
}