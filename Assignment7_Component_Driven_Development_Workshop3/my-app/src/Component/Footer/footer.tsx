import Todo from "../../Types/type";
import "./footer.css";
type FooterPrps = {
  items: Todo[];
};
function Footer(props: FooterPrps) {
  const { items } = props;
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={
            items.filter((todo) => todo.done).length === items.length &&
            items.length !== 0
          }
        />
      </label>
      <span>
        <span>
          Finished {items.filter((items) => items.done == true).length}{" "}
        </span>{" "}
        / total {items.length}
      </span>
      <button className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
}
export default Footer;
