import React, { useRef } from 'react';

const TodoAdd = (props) => {
    const todoNameRef = useRef();

    const handleAddTodo = () => {
        props.handleAddTodo(todoNameRef.current.value);
        todoNameRef.current.value = null;
    }

    const handleClearTodos = () => {
        props.handleClearTodos();
    }

    return (
        <div className="input-group mb-3">
            <input className="form-control" placeholder="New Todo" type={'text'} ref={todoNameRef}/>
            <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button" onClick={handleAddTodo}>Add</button>
                <button className="btn btn-outline-danger" type="button" onClick={handleClearTodos}>Clear Completed
                </button>
            </div>
        </div>
    )
}

export default TodoAdd;
