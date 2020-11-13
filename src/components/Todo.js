import React from 'react';

const Todo = (props) => {
    const todo = props.todo;
    const toggleTodo = props.toggleTodo;
    const handleDeleteTodo = props.handleDeleteTodo;

    const handleTodoClick = () => toggleTodo(todo.id);
    const handleDeleteTodoClick = () => handleDeleteTodo(todo.id);

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" checked={todo.complete}
                           onChange={handleTodoClick}/>
                    {todo.name}
                </label>
            </div>
            <span className="badge badge-danger badge-pill badge-button" onClick={handleDeleteTodoClick}>Delete</span>
        </li>
    );
}

export default Todo;
