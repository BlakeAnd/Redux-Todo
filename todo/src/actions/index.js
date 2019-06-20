export const ADD_TODO = "ADD_TODO";

export const addTodo = newTodo => {
  console.log(newTodo)
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

