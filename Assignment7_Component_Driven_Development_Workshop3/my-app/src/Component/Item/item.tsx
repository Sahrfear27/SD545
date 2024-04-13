import { useState } from "react";
import Todo from "../../Types/type";
import "./item.css";
type ItemTodo = {
  elements: Todo;
  deleteItem: (id: string) => void;
};
function Item(props: ItemTodo) {
  const [hover, setHover] = useState(false);
  const { elements, deleteItem } = props;
  const handleMouseHorver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <li onMouseEnter={handleMouseHorver} onMouseLeave={handleMouseLeave}>
      <label>
        <input type="checkbox" />
        <span>{elements.name}</span>
      </label>
      {hover && (
        <button
          className="btn btn-danger"
          style={{ display: "block" }}
          onClick={() => deleteItem(elements.id)}
        >
          Delete
        </button>
      )}
    </li>
  );
}
export default Item;
