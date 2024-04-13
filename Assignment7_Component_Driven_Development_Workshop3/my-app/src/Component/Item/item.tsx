import { ChangeEvent, useState } from "react";
import Todo from "../../Types/type";
import "./item.css";
type ItemTodo = {
  elements: Todo;
  deleteItem: (id: string) => void;
  oneUpdateTodo: (id: string) => void;
};
function Item(props: ItemTodo) {
  const [hover, setHover] = useState(false);
  const { elements, deleteItem, oneUpdateTodo } = props;
  const handleMouseHorver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleCheck = () => {
    oneUpdateTodo(elements.id);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure")) {
      deleteItem(elements.id);
    }
  };
  return (
    <li onMouseEnter={handleMouseHorver} onMouseLeave={handleMouseLeave}>
      <label>
        <input type="checkbox" checked={elements.done} onChange={handleCheck} />
        <span>{elements.name}</span>
      </label>
      {hover && (
        <button
          className="btn btn-danger"
          style={{ display: "inline-block" }}
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      )}
    </li>
  );
}
export default Item;
