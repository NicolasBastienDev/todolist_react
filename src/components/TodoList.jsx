import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";
import { useTodos } from "../context/todoContext";

function TodoList() {
  const state = useTodos();

  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo todo={todo} key={todo.id} />
        ) : (
          <TodoItem todo={todo} key={todo.id} />
        )
      )}
    </ul>
  ) : (
    <p>Aucune Todo pour le moment</p>
  );
}

export default TodoList;
