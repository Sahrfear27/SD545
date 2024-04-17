import "./list.css";
import { User } from "../../Types/types";
import searchResponse from "../../Types/search_Names";
import PubSub from "pubsub-js";
import { useEffect, useState } from "react";
// type ListProps = {
//   sendDataToList: searchResponse;
// };

function List() {
  const [searchResponse, setSearchResponse] = useState<searchResponse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    user: [],
  });

  const { isFirst, isLoading, isError, user } = searchResponse;
  useEffect(() => {
    const token = PubSub.subscribe("SD540", (msg, data) => {
      console.log(msg);
      setSearchResponse(data);
    });
    // cleanUP
    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);
  return (
    <>
      {isFirst ? (
        <p>Please enter keywork</p>
      ) : isLoading ? (
        <p>Please wait</p>
      ) : isError ? (
        <p>Whoops ! Please enter a text</p>
      ) : (
        <div>
          {user.map((response) => (
            <div key={response.id} className="card">
              <a href={response.html_url}>
                <img src={response.avatar_url} style={{ width: "100px" }} />
              </a>
              <p className="card-text">{response.login}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default List;
