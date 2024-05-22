import { useState } from "react";
import Button from "./Button";
import { useTodoDispatcher } from "../context/todoContext";

function EditTodo({ todo }) {
  const [value, setValue] = useState(todo.content);
  const dispatch = useTodoDispatcher();

  function handleChange(e) {
    const inputValue = e.target.value;

    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
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
      <Button
        onClick={() =>
          dispatch({
            type: "TOGGLE_EDIT_TODO",
            id: todo.id,
          })
        }
        text="Annugler"
        className="mr-15"
      />
      <Button onClick={handleClick} text="Sauvegarder" />
    </div>
  );
}

export default EditTodo;
