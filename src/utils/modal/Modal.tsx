import {Dialog, Transition} from '@headlessui/react';
import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {todoAPI} from "../../services/TodoAPI.ts";
import {ITodo} from "../../Imodels/ITodo.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {modalSlice} from "../../store/reducers/ModalSlice.ts";

export default function Modal() {
    const [creatTodo, {}] = todoAPI.useCreateTodoMutation();
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        checked: false,
        favorite: false
    });

    const {isOpen} = useAppSelector(state => state.modalReducer);
    const dispatch = useAppDispatch();

    const creatTodos = async (e: FormEvent) => {
        e.preventDefault();
        await creatTodo(todo as ITodo);
        closeModal();
        setTodo({
            title: '',
            description: '',
            checked: false,
            favorite: false
        })

    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo((prevFormData) => ({...prevFormData, [name]: value}));
    };


    function closeModal() {
        dispatch(modalSlice.actions.handlerModal(false))
    }


    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Todo
                                    </Dialog.Title>

                                    <div className="mt-4">
                                        <form className={'flex-col flex gap-3'}>
                                            <label>
                                                <input className={'w-full bg-green-100 text-green-900 rounded-md'}
                                                       name={'title'}
                                                       // onChange={(e) => setTodo({
                                                       //     ...todo, title: e.target.value
                                                       // })}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label>
                                                <input className={'w-full bg-green-100 text-green-900 rounded-md'}
                                                       name={'description'}
                                                       // onChange={(e) => setTodo({
                                                       //     ...todo, description: e.target.value
                                                       // })}
                                                       onChange={handleChange}

                                                />
                                            </label>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={creatTodos}
                                            >
                                                Create Todo!
                                            </button>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
