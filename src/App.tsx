import React, {useState} from 'react';
import AddTodoForm from "./components/AddTodoForm";
import {ITodo} from "./components/types/types";
import List from "./components/List";
import TodoItem from "./components/TodoItem";

function App() {

    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const removeItem = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleComplete = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }

    return (
        <div className="App">
            <AddTodoForm addTodo={addTodo}/>
            <List items={todos}
                  renderItem={(todo: ITodo) =>
                      <TodoItem todo={todo} key={todo.id}
                                removeItem={removeItem}
                                toggleComplete={toggleComplete}
                      />}/>
        </div>
    );
}

export default App;
