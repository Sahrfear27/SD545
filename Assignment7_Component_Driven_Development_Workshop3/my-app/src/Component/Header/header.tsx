import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import Todo from "../../Types/type";
import "./header.css";
import { nanoid } from "nanoid";

type HeaderTodos = {
  onAddItem: (newTodo: Todo) => void;
};
function Header(props: HeaderTodos) {
  // const [task, setTask] = useState("");
  const { onAddItem } = props;

  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    const result = e.currentTarget.value;
    const newList = {
      id: nanoid(),
      name: result,
      done: false,
    };
    if (result.trim()) {
      if (e.key == "Enter") {
        onAddItem(newList);
        e.currentTarget.value = "";
      }
    } else {
      alert(`Task cannot be empty`);
    }
  };

  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name" onKeyUp={handleInput} />
    </div>
  );
}
export default Header;
