export const allTodos = state => {
  let todoIds = Object.keys(state.todos);

  return todoIds.map((todoId) =>{
    return state.todos[todoId]
  });
}
