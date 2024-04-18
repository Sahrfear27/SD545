import { NavLink, Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul className="nav nav-pills mb-3 border-bottom">
        <li className="nav-item">
          <NavLink className="nav-link " to="news">
            News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="messages">
            Messages
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default Home;
