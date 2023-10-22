import { useState } from "react";
import { useTodo } from "../contexts";
import PropTypes from 'prop-types'

function TodoItem({ todo }) {
    const [ istodoedit , setIstodoedit ] = useState(false);
    const [todomsg , setTodoMsg ] = useState(todo.todo)

    const { updateTodo , deleteTodo , toggleComplete  } = useTodo();

    const edittodo = () => {
        updateTodo(todo.id , {...todo , todo : todomsg})
        setIstodoedit(false);
    }

    const togglecompleteevent = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.Completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.Completed}
                onChange={togglecompleteevent}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istodoedit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.Completed ? "line-through" : ""}`}
                value={todomsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!istodoedit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.Completed) return;

                    if (istodoedit) {
                        edittodo();
                    } else setIstodoedit((prev) => !prev);
                }}
                disabled={todo.Completed}
            >
                {istodoedit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        todo: PropTypes.string,
        Completed: PropTypes.bool
    }),
    deleteTodo: PropTypes.func,
    toggleComplete: PropTypes.func,
    edittodo: PropTypes.func,
    istodoedit: PropTypes.bool
};

export default TodoItem;
