import {useAppSelector} from "../../hooks/redux.ts";
import {todoSlice} from "../../store/reducers/TodoSlice.ts";

const TodoList = () => {
    {} = useAppSelector(state => state.todoReducer)
    return (
        <div>
            
        </div>
    );
};

export default TodoList;