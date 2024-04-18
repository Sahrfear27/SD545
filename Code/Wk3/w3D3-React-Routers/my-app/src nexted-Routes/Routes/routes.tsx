import Home from "../Pages/home";
import About from "../Pages/about";
import PageNotFound from "../Pages/pageNotFound";
import { Navigate } from "react-router-dom";

export default [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
