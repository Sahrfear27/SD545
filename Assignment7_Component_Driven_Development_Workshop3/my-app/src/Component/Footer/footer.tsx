import Todo from "../../Types/type";
import "./footer.css";
type FooterPrps = {
  items: Todo[];
  updateFooterTodo: () => void;
  dlelteAllItems: () => void;
};
function Footer(props: FooterPrps) {
  const { items, updateFooterTodo, dlelteAllItems } = props;

  const handleClick = () => {
    updateFooterTodo();
  };

  const handleButton = () => {
    dlelteAllItems();
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
