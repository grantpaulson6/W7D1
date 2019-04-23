import React from 'react';
import { allTodos } from '../../reducers/selectors';
import ToDoListItem from './todo_list_item';
import TodoForm from './todo_form';

const ToDoList = ({ todos, receiveTodo }) => {
  // debugger
  return (
    <div>
      <h3>Todo List Goes Here!</h3>
      <ul>
        { todos.map(todo => <ToDoListItem todo={todo} key={todo.id}/> ) }
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  )
}

export default ToDoList;

