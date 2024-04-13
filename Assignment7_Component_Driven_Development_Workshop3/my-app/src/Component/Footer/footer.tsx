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
        <input type="checkbox" />
      </label>
      <span>
        <span>Finished 0</span> / total {items.length}
      </span>
      <button className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
}
export default Footer;
