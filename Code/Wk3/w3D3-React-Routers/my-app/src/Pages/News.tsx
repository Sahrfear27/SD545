import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function News() {
  const [course, setCourse] = useState([
    { id: 1, title: "WAP1", content: "Learning React" },
    { id: 2, title: "Angular", content: "Creating a fully functional website" },
    {
      id: 3,
      title: "WAP2",
      content: "Building web application using react native",
    },
    { id: 4, title: "SD540", content: "Server Side Programming" },
  ]);
  return (
    <div>
      <ul>
        {course.map((elements) => (
          <li>
            <Link
              to={`detail/${elements.id}/${elements.title}/${elements.content}`}
            >
              {elements.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
