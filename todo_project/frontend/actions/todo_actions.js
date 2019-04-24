import * as APIUtil from '../utils/todo_utils'
import receiveErrors from './error_actions'

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';


export const receiveTodos = (todos) => (
  {
    type: RECEIVE_TODOS,
    todos
  }
)
export const receiveTodo = (todo) => (
  {
    type: RECEIVE_TODO,
    todo
  }
)
  
window.receiveTodos = receiveTodos

export const fetchTodos = () => (dispatch) => (
  APIUtil.fetchTodos()
    .then( todos => dispatch(receiveTodos(todos)))
)

window.fetchTodos = fetchTodos

export const createTodo = (todo) => (dispatch) => (
  APIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)
