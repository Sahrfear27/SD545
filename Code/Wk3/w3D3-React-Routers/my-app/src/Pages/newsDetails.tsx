import React from "react";
import { useParams } from "react-router-dom";

export default function NewsDetails() {
  const { id, title, content } = useParams();
  return (
    <div>
      <h4>News Details</h4>
      <ul>
        <li>id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{content}</li>
      </ul>
    </div>
  );
}
