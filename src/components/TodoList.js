import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return props.todos.length > 0 ?
        (
            <ul className="list-group">
                {
                    props.todos.map(todo =>
                        <Todo key={todo.id}
                              todo={todo}
                              toggleTodo={props.toggleTodo}
                              handleDeleteTodo={props.handleDeleteTodo}/>
                    )
                }
            </ul>
        ) : <h5>Congrats! your list is empty</h5>

}

export default TodoList;
