import { useRef } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

function Search() {
  // Use uncontrol component
  const inputRef = useRef<HTMLInputElement>(null);

  const search = async () => {
    // Inside here the keyword would be type and search for already

    // Publish the subscriber to the component using the data
    try {
      PubSub.publish("SD540", {
        isFirst: false,
        isLoading: true,
        isError: false,
        user: [],
      });
      const response = await axios.get(
        `https://api.github.com/search/users?q=${inputRef.current?.value}`
      );
      if (response.status == 200) {
        PubSub.publish("SD540", {
          isFirst: false,
          isLoading: false,
          isError: false,
          user: response.data.items,
        });
      }
    } catch (e) {
      PubSub.publish("SD540", {
        isFirst: false,
        isLoading: false,
        isError: true,
        user: [],
      });
    }
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
              ref={inputRef}
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
