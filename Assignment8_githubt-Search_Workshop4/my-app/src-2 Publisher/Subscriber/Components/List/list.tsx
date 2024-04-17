import "./list.css";
import { User } from "../../Types/types";
type ListProps = {
  sendDataToList: User[];
};

function List(props: ListProps) {
  const { sendDataToList } = props;
  return (
    <>
      {sendDataToList.map((response) => (
        <div key={response.id} className="card">
          <a href={response.url}>
            <img src={response.avatar_url} style={{ width: "100px" }} />
          </a>
          <p className="card-text">{response.login}</p>
        </div>
      ))}
    </>
  );
}
export default List;
