import { useEffect, useState } from "react";

import Header from "./Component/Header/header";
import List from "./Component/List/list";
import Footer from "./Component/Footer/footer";
import Todo from "./Types/type";

import "./App.css";
function App() {
  const [todos, setTodo] = useState<Todo[]>([]);
  // Fetch the data from server
  useEffect(() => {
    async function getItems() {
      const response: Response = await fetch("http://localhost:7003/todos");
      const result: Todo[] = await response.json();
      setTodo(result);
    }
    getItems();
  }, []);

  // Add new Item: This contain the initial state variable for the list
  // const addItem = (itemName: string) => {
  //   const data: Todo = {
  //     id: (todos.length + 1).toString(),
  //     name: itemName,
  //     done: false,
  //   };
  //   setTodo([...todos, data]);
  // };

  // Second Option
  const addItem2 = (newtoDo: Todo) => {
    setTodo([...todos, newtoDo]);
  };
  // Delete One Item:
  const deleteOne = (id: string) => {
    const data = todos.filter((items) => items.id !== id);
    setTodo(data);
  };

  const updatetodo = (id: string) => {
    // Fine the todo which you checked, then change done to be not done (The opposeit of done)
    const newTodo = todos.map((element) => {
      if (element.id === id) {
        return { ...element, done: !element.done };
      } else {
        return element;
      }
    });
    setTodo(newTodo);
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        {/* <Header addItems={addItem} /> */}
        <Header onAddItem={addItem2} />
        {/* <List items={todos} deleteItem={deleteOne} /> */}
        <List items={todos} oneUpdateTodo={updatetodo} deleteItem={deleteOne} />
        <Footer items={todos} />
      </div>
    </div>
  );
}

export default App;