import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actions-types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //add todo
      console.log("todo reducer");
      console.log(action.payload);
      return [...state, action.payload];

    case DELETE_TODO:
      //delete todo
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;

    case UPDATE_TODO:
      const updateState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          todo.title = action.payload.title;
          todo.description = action.payload.description;
        }
        return todo;
      });
      return updateState;

    default:
      return state;
  }
};
