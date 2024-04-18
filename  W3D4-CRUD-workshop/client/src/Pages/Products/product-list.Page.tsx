import React from "react";
import List from "../../Components/List/list.component";
export default function ProductList() {
  return (
    <div className="row mt-5">
      <List />
      <div className="col">
        <ul className="list-group">
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">React.js</li>
        </ul>
      </div>
      <div className="col">
        <p>Product Id: </p>
        <p>Product Title: </p>
        <p>Product Price: </p>
        <p>Product Description: </p>
        <p>
          <button className="btn btn-danger">Delete</button>
        </p>
      </div>
    </div>
  );
}
