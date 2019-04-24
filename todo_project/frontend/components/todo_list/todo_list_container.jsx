import { connect } from 'react-redux'
import ToDoList from './todo_list'
import { allTodos } from '../../reducers/selectors'
import { receiveTodo, receiveTodos, fetchTodos, createTodo } from '../../actions/todo_actions'


const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  // receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)