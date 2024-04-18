import Home from "../Pages/home";
import About from "../Pages/about";
import PageNotFound from "../Pages/pageNotFound";
import { Navigate } from "react-router-dom";
import Messages from "../Pages/Messages";
import News from "../Pages/News";
import Detail from "../Pages/detail";
import NewsDetails from "../Pages/newsDetails";
export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "messages",
        element: <Messages />,
        children: [
          {
            path: "detail/:id/:title/:content",
            element: <Detail />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
        children: [
          {
            path: "detail/:id/:title/:content",
            element: <NewsDetails />,
          },
        ],
      },
    ],
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
