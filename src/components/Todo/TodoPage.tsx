import {todoAPI} from "../../services/TodoAPI.ts";
import {useAppSelector} from "../../hooks/redux.ts";

const TodoPage = () => {
    const {id} = useAppSelector(state => state.curentTodoReducer);
    const {data} = todoAPI.useFetchTodoIdQuery(id);

    if (data) {
        return (
            <div className={'p-5'}>
                <div className={'mb-5 flex flex-col gap-0.5'}>
                    <h3 className={'text-3xl font-black'}>Название: {data.title}</h3>
                    <h4 className={'text-xl font-bold'}>Описание: {data.description ?
                        data.description :
                        <button className={'text-sm'}>добавить описание</button>}
                    </h4>
                    <h5 className={'font-bold'}>Статус: {data.checked ?
                        <span className={'text-green-500'}>Выполнено</span> :
                        <span className={'text-red-500'}>Ожидает выполнения</span>}
                    </h5>
                </div>
                <button>Добавить картинку</button>
            </div>
        );
    }
};

export default TodoPage;