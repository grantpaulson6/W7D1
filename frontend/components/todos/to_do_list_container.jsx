import { connect } from 'react-redux'
import ToDoList from './to_do_list'
import { allTodos } from '../../reducers/selectors'
import { receiveTodo, receiveTodos } from '../../actions/todo_actions'

const mapStateToProps = (state) => ({
  todos: allTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  // receiveTodos: todos => dispatch(receiveTodos(todos))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)