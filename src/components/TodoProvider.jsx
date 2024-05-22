import themeContext from "../context/theme";
import {
  todoDispatcherContext,
  todoStateContext,
} from "../context/todoContext";
import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "primary",
    todoList: [],
  });
  return (
    <todoStateContext.Provider value={state}>
      <todoDispatcherContext.Provider value={dispatch}>
        <themeContext.Provider value={state.theme}>
          {children}
        </themeContext.Provider>
      </todoDispatcherContext.Provider>
    </todoStateContext.Provider>
  );
}

export default TodoProvider;
