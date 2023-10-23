import { useSelector , useDispatch } from "react-redux";
import { removeTodo } from "../Todo/Todoslice";

const Todos = () => {

    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()
    return (
        <>
        <div>Todos</div>
        <ul className="list-none">
            {todos.map((todo) => (
                <li key={todo.id} >
                    {todo.text}
                    <button
                    onClick={() => {dispatch(removeTodo(todo.id))}}>
                        ❌
                    </button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos
