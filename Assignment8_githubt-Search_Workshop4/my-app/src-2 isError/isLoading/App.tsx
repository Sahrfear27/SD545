import { useState } from "react";
import { User } from "./Types/types";
import List from "./Components/List/list";
import Search from "./Components/Search/search";

function App() {
  const [searchResponse, setSearchResponse] = useState<User[]>([]);

  const getSearchResponse = (response: User[]) => {
    setSearchResponse(response);
  };
  return (
    <>
      <Search onGetResponse={getSearchResponse} />
      <List sendDataToList={searchResponse} />
    </>
  );
}

export default App;
