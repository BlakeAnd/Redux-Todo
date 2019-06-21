//import { bindActionCreators } from "../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import { ADD_TODO, DONE} from "../actions";

const initialState = {
  todos: [
   //{ value: '', completed: false}
 ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type){ 
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false}]
      };
    case DONE:
      return {
        ...state,
        todos: state.todos.map((todos, index) => {
        if (action.payload === index){
          return{
            ...todos, 
            completed: !todos.completed
          } 
        } else {
            return todos;
          }
      })
    };
    default: 
      return state;  
  }
}
export default reducer;