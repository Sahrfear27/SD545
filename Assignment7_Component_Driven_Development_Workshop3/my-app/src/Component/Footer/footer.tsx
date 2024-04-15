import Todo from "../../Types/type";
import "./footer.css";
type FooterPrps = {
  items: Todo[];
  updateFooterTodo: () => void;
  onGetDelete: (todo: Todo[]) => void;
};
function Footer(props: FooterPrps) {
  const { items, updateFooterTodo, onGetDelete } = props;

  const handleClick = () => {
    updateFooterTodo();
  };

  // Check if total items checked is the same as total
  const handleButton = () => {
    const result = items.filter((todo) => todo.done);
    if (result.length === items.length) {
      onGetDelete(items);
    }
  };
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={
            items.filter((todo) => todo.done).length === items.length &&
            items.length !== 0
          }
          onChange={handleClick}
        />
      </label>
      <span>
        <span>
          Finished {items.filter((items) => items.done == true).length}{" "}
        </span>{" "}
        / total {items.length}
      </span>
      <button className="btn btn-danger" onClick={handleButton}>
        Delete Finished Tasks
      </button>
    </div>
  );
}
export default Footer;
