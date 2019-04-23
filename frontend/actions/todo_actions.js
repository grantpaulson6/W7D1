
//why export these???
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

// need to create our payload somehwere...
export const receiveTodos = (todos) => (
  {
    type: RECEIVE_TODOS,
    todos
  }
)

window.receiveTodos = receiveTodos;

export const receiveTodo = (todo) => (
  {
    type: RECEIVE_TODO,
    todo
  }
)

window.receiveTodo = receiveTodo;
