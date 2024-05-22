import { useTodoDispatcher } from "../context/todoContext";
import Button from "./Button";

function TodoItem({ todo }) {
  const dispatch = useTodoDispatcher();

  return (
    <li
      onClick={() =>
        dispatch({
          type: "SELECT_TODO",
          id: todo.id,
        })
      }
      className={`d-flex flex-row justify-content-center align-items-center p-10 mb-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "✅"}
      </span>
      <Button
        className="mr-15"
        text="Valider"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_TODO",
            id: todo.id,
          });
        }}
      />
      <Button
        className="mr-15"
        text="Modifier"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_EDIT_TODO",
            id: todo.id,
          });
        }}
      />
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "DELETE_TODO",
            id: todo.id,
          });
        }}
      />
    </li>
  );
}

export default TodoItem;
