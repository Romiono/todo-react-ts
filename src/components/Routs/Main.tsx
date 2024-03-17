import TodoList from "../TofoList/TodoList.tsx";
import {todoAPI} from "../../services/TodoAPI.ts";
import Modal from "../../utils/modal/Modal.tsx";

const Main = () => {
    const {data: todosAPI,} = todoAPI.useFetchAllTodosQuery();
    // const todos = todosAPI?.data ?? [];
    // useEffect(() => {
//     const onScroll = () => {
//         const scrolledToBottom =
//             window.innerHeight + window.scrollY >= document.body.offsetHeight;
//         if (scrolledToBottom && !isFetching) {
//             console.log("Fetching more data...");
//             setPage(page + 1);
//         }
//     };
//
//     document.addEventListener("scroll", onScroll);
//
//     return function () {
//         document.removeEventListener("scroll", onScroll);
//     };
// }, [page, isFetching]);

    return (
        <div className={'p-5'}>
            {todosAPI && <TodoList todos={todosAPI}/>}
            <Modal/>
        </div>
    );
};

export default Main;