import { useState } from "react";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;

    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
        value={value}
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Ajouter
      </button>
    </div>
  );
}

export default AddTodo;
