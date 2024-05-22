import { useContext, useState } from "react";
import Button from "./Button";
import { todoDispatcherContext } from "../context/todoContext";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useContext(todoDispatcherContext);

  function handleChange(e) {
    const inputValue = e.target.value;

    setValue(inputValue);
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
      setValue("");
    }
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
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
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
