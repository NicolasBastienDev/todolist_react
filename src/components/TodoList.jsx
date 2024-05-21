import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
  selectTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            todo={todo}
            key={todo.id}
            cancelEditTodo={() => toggleTodoEdit(todo.id)}
            editTodo={(content) => editTodo(todo.id, content)}
          />
        ) : (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
            editTodo={() => toggleTodoEdit(todo.id)}
            selectTodo={() => selectTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune Todo pour le moment</p>
  );
}

export default TodoList;
