import React from 'react';
import { allTodos } from '../../reducers/selectors';
import ToDoListItem from './todo_list_item';
import TodoForm from './todo_form';

//question: cant deconstruct props for a class????? { todos, receiveTodo, fetchTodos }
class ToDoList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTodos();
  }
  
  render() {
    return (
      <div>
        <h3>Todo List Goes Here!</h3>
        <ul>
          { this.props.todos.map(todo => <ToDoListItem todo={todo} key={todo.id}/> ) }
        </ul>
        <TodoForm createTodo={this.props.createTodo}/>
      </div>
    )
  }
}

export default ToDoList;

