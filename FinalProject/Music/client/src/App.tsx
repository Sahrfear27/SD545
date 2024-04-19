import "bootstrap/dist/css/bootstrap.css";
import LogIn from "./Components/Users/Login.user";
import Data from "./Components/MainPage/Data/data";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/data" element={<Data />}></Route>
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    </>
  );
}

export default App;
