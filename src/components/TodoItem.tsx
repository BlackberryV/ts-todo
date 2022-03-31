import React, {FC} from 'react';
import {ITodo} from "./types/types";
import "../index.css"

interface TodoItemProps {
    todo: ITodo;
    removeItem: (id: number) => void;
    toggleComplete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, removeItem, toggleComplete}) => {
    return (
        <div>
            <div onClick={() => {toggleComplete(todo.id)}} className={todo.completed ? "done" : ""}>
            {todo.id} {todo.title}
                </div>
                <button onClick={() => removeItem(todo.id)}>Remove</button>
                </div>
                );
            }
            ;

            export default TodoItem;