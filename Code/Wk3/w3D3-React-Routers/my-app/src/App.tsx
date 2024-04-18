import { NavLink, Routes, Route, Navigate, useRoutes } from "react-router-dom";
import "./App.css";
import classNames from "classnames";
import routes from "./Routes/routes";

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Logo</span>
        </a>
      </header>
      <div className="row justify-content-start">
        <div className="col-3">
          <div className="d-flex flex-column flex-shrink-0 p-3 border">
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link" end>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-9">{elements}</div>
      </div>
    </div>
  );
}

export default App;
