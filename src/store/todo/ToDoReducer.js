import {
  ADD_TODO,
  CHANGE_TYPE,
  DELETE_TODO,
  SET_TODO_NAME,
  SHOW_LOADING,
  TOGGLE_COMPLETE,
} from "../../utils/constant";

const initialState = {
  isLoading: false,
  newTodoName: "",
  todos: [
    { id: 1, title: "Olahraga", complete: true },
    { id: 2, title: "Ngoding", complete: false },
    { id: 3, title: "Ngopskuy", complete: true },
  ],
  type: "All",
};
const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        newTodoName: "",
        todoIndex: state.todoIndex + 1,
        todos: [...state.todos, action.payload],
      };
    }
    case TOGGLE_COMPLETE: {
      let todos = [...state.todos];
      todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.complete = !todo.complete;
        }
      });
      return {
        ...state,
        todos: todos,
      };
    }
    case DELETE_TODO: {
      let todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: todos,
      };
    }
    case CHANGE_TYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }
    case SET_TODO_NAME: {
      return {
        ...state,
        newTodoName: action.payload,
      };
    }
    case SHOW_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};
export default ToDoReducer;
