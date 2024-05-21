import { useState } from "react";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;

    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
        value={value}
      />
      <button className="btn btn-primary mr-15" onClick={handleClick}>
        Sauvegarder
      </button>
      <button className="btn btn-reverse-primary" onClick={cancelEditTodo}>
        Annuler
      </button>
    </div>
  );
}

export default EditTodo;
