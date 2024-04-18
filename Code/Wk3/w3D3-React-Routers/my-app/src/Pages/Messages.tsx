import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function Messages() {
  // Mesages start here
  const [message, setMessages] = useState([
    { id: 1, title: "Weather", content: "Heavy thunder storm detected" },
    { id: 2, title: "Mass Shooting", content: "Another shooting occured" },
  ]);
  return (
    <div>
      <ul>
        {message.map((msg) => (
          <li key={msg.id}>
            <Link to={`detail/${msg.id}/${msg.title}/${msg.content}`}>
              {msg.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
