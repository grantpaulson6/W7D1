import React from 'react';
import { allTodos } from '../../reducers/selectors';

const ToDoList = ({ todos, receiveTodo }) => {
  // debugger
  return (
    <div>
      <h3>Todo List Goes Here!</h3>
      <ul>
        { todos.map(todo => <li key={todo.id}> {todo.title} </li> ) }
      </ul>
    </div>
  )
}

export default ToDoList;

