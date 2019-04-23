import { connect } from 'react-redux'
import ToDoList from './to_do_list'
import { allTodos } from '../../reducers/selectors'

const mapStateToProps = (state) => (
  todos: allTodos(state)
);