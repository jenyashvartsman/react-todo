import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import TodoAdd from './components/TodoAdd';
import TodoLeftCounter from './components/TodoLeftCounter';

const LOCAL_STORAGE_KEY_TODOS = 'todoApp.todos';

function App() {
    const [todos, seTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS));
        if (storedTodos) seTodos(storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
    }, [todos])

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        seTodos(newTodos);
    }

    const handleAddTodo = (name) => {
        if (name === '') return;
        seTodos(prevTodos => {
            return [...prevTodos, {
                id: uuidv4(),
                name: name,
                complete: false
            }];
        })
    }

    const handleClearTodos = () => {
        const newTodos = todos.filter(todo => !todo.complete);
        seTodos(newTodos);
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        seTodos(newTodos);
    }

    return (
        <div className={'container'}>
            <header>
                <h1>Simple React Todo App</h1>
                <hr/>
            </header>
            <TodoAdd handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos}/>
            <TodoList todos={todos} toggleTodo={toggleTodo} handleDeleteTodo={handleDeleteTodo}/>
            <TodoLeftCounter todos={todos}/>
        </div>
    );
}

export default App;
