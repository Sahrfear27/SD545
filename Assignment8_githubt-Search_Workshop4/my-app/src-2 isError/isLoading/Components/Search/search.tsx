import { ChangeEvent, useState } from "react";
import { User } from "../../Types/types";
import axios from "axios";

type Props = {
  onGetResponse: (response: User[]) => void;
};

function Search(props: Props) {
  const { onGetResponse } = props;
  const [keyword, setkeyword] = useState("");
  const search = async () => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${keyword}`
    );
    // if (response.status === 200) {
    onGetResponse(response.data.items);
    // }
  };
  return (
    <>
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              value={keyword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setkeyword(e.currentTarget.value)
              }
            />
            &nbsp;<button onClick={search}>Search</button>
          </div>
        </section>
        <div className="row"></div>
      </div>
    </>
  );
}
export default Search;
