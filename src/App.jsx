import { useReducer } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import themeContext from "./context/theme";
import todoReducer from "./reducers/todoReducer";
import { todoDispatcherContext, todoStateContext } from "./context/todoContext";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "primary",
    todoList: [],
  });

  function handleChange(e) {
    dispatch({
      type: "SET_THEME",
      theme: e.target.value,
    });
  }

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatcherContext.Provider value={dispatch}>
        <themeContext.Provider value={state.theme}>
          <div className="d-flex justify-content-center align-items-center p-20">
            <div className="card container p-20">
              <h1 className="mb-20 d-flex flex-row justify-content-center align-items-center">
                <span className="flex-fill">Liste de tâches</span>
                <select value={state.theme} onChange={handleChange}>
                  <option value="primary">Rouge</option>
                  <option value="secondary">Bleu</option>
                </select>
              </h1>
              <AddTodo />
              <TodoList todoList={state.todoList} />
            </div>
          </div>
        </themeContext.Provider>
      </todoDispatcherContext.Provider>
    </todoStateContext.Provider>
  );
}

export default App;
