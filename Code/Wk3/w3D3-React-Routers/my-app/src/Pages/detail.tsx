import React from "react";

import { useParams } from "react-router-dom";
export default function Detail() {
  const { id, title, content } = useParams();
  return (
    <>
      <div>Details</div>
      <ul>
        <li>Message ID: {id}</li>
        <li>Message ID: {title}</li>
        <li>Message ID: {content}</li>
      </ul>
    </>
  );
}
