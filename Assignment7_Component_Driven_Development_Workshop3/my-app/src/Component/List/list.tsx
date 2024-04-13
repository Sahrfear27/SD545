import Item from "../Item/item";
import Todo from "../../Types/type";
// type ListProps = {
//   items: Todo[];
//   deleteItem: (id: string) => void;
// };
// function List(props: ListProps) {
//   const { items, deleteItem } = props;
//   return (
//     <ul className="todo-main">
//       {items.map((elements) => (
//         <Item key={elements.id} elements={elements} deleteItem={deleteItem} />
//       ))}
//     </ul>
//   );
// }

type ListProps = {
  items: Todo[];
  oneUpdateTodo: (id: string) => void;
  deleteItem: (id: string) => void;
};
function List(props: ListProps) {
  const { items, oneUpdateTodo, deleteItem } = props;
  return (
    <ul className="todo-main">
      {items.map((elements) => (
        <Item
          key={elements.id}
          elements={elements}
          oneUpdateTodo={oneUpdateTodo}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}
export default List;
