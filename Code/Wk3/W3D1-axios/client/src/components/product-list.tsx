import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./add-product";
import Product from "../Types/types";

type Props = {
  products: Product[];
};
export default function ProductList(props: Props) {
  const { products } = props;

  return (
    <div>
      <h2>Product List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>

              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
        {/* <AddProduct addProduct={addNewData} /> */}
      </table>
    </div>
  );
}
