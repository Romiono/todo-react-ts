import {todoAPI} from "../../services/TodoAPI.ts";
import {useAppSelector} from "../../hooks/redux.ts";
import {useState} from "react";

const TodoPage = () => {

    const [description, setDescription] = useState('');

    const {id} = useAppSelector(state => state.curentTodoReducer);
    const {data} = todoAPI.useFetchTodoIdQuery(id);
    const [patch, {}] = todoAPI.useAddTitleMutation();


    const addDescription = () => {
        try {
            if (data) {
                patch({...data, description});
            }
        } catch {
            console.log('ошибка');
        }
    }

    if (data) {
        return (
            <div className={'p-5'}>
                <div className={'mb-5 flex flex-col gap-0.5'}>
                    <h3 className={'text-3xl font-black'}>Название: {data?.title}</h3>
                    <h4 className={'text-xl font-bold'}>Описание: {data?.description ?
                        data?.description :
                        <div className={'flex items-center gap-5'}>
                            <input value={description} onChange={(e) => setDescription(e.target.value)}/>
                            <button onClick={addDescription} className={'text-sm'}>добавить описание</button>
                        </div>}
                    </h4>
                    <h5 className={'font-bold'}>Статус: {data.checked ?
                        <span className={'text-green-500'}>Выполнено</span> :
                        <span className={'text-red-500'}>Ожидает выполнения</span>}
                    </h5>
                </div>
            </div>
        );
    }
    return (
        <></>
    )
};

export default TodoPage;