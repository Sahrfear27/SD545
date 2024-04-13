import { ChangeEvent, useState } from "react";
import "./header.css";

type HeaderTodo = {
  addItems: (name: string) => void;
};
function Header(props: HeaderTodo) {
  const [task, setTask] = useState("");
  const { addItems } = props;
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value);
  };

  const handleButton = () => {
    if (task !== "") {
      addItems(task);
      setTask("");
    }
  };
  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="Enter task name"
        value={task}
        onChange={handleInput}
      />
      <button onClick={handleButton}>Add Items</button>
    </div>
  );
}
export default Header;
