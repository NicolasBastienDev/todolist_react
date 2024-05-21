function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`d-flex flex-row justify-content-center align-items-center p-10 mb-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "✅"}
      </span>
      <button
        className="btn btn-primary mr-15"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
      >
        Valider
      </button>
      <button
        className="btn btn-primary mr-15"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
      >
        Modifier
      </button>
      <button
        className="btn btn-reverse-primary mr-15"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
