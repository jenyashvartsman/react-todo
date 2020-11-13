import React from 'react';

const TodoLeftCounter = (props) => {
    return (
        <div className={'mt-3'}>
            {props.todos.filter(todo => !todo.complete).length} left to do
            <span className={'mr-2 ml-2'}>|</span>
            {props.todos.filter(todo => todo.complete).length} completed
            <span className={'mr-2 ml-2'}>|</span>
            {props.todos.length} Total
        </div>
    )
}

export default TodoLeftCounter;
