import {todoAPI} from "../../services/TodoAPI.ts";
import {useAppSelector} from "../../hooks/redux.ts";

const TodoPage = () => {
    const {id} = useAppSelector(state => state.curentTodoReducer);
    const {data} = todoAPI.useFetchTodoIdQuery(id);

    if(data) {
        return (
            <div>
                <h3>Название: {data.title}</h3>
                <h4>Описание: {data.description}</h4>
                {data.checked ?
                    <h5>Статус: Выполнено</h5>
                    :
                    <h5>Статут: Ожидает выполнения</h5>
                }
            </div>
        );
    }
};

export default TodoPage;