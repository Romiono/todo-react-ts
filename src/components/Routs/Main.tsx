import TodoList from "../TofoList/TodoList.tsx";
import {todoAPI} from "../../services/TodoAPI.ts";
import Modal from "../../utils/modal/Modal.tsx";
import {Outlet} from "react-router-dom";

const Main = () => {
    const {data: todosAPI} = todoAPI.useFetchAllTodosQuery();
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
        <div className={'columns-2 flex h-full'}>
            <div className={' h-full w-1/2 border-r-2 border-r-neutral-700 p-5'}>
                {todosAPI && <TodoList todos={todosAPI}/>}
            </div>
            <div className={'w-1/2'}>
                <Outlet/>
            </div>
            <Modal/>
        </div>
    );
};

export default Main;