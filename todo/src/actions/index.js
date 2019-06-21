export const ADD_TODO = "ADD_TODO";

export const addTodo = newTodo => {
  console.log(newTodo)
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export const DONE = "DONE";

export const toggle = index => {
  return{
    type: DONE,
    payload: index
  };
}

