import logo from "./images/logo.jpg";
import axios from "./apis/axios";
import { useEffect, useState } from "react";
import productServices from "./apis/services/product.services";
type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default function App() {
  const [product, setProducts] = useState<Products[]>([]);
  useEffect(() => {
    async function getproducts() {
      const response = await productServices.getAll();

      setProducts(response.data);
      // setProducts(response.data);
      // console.log(response.data);
    }
    getproducts();
  }, []);
  return (
    <div className="container">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo} alt="Maharishi Logo" style={{ width: "100px" }} />
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Add
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="row mt-5">
        <div className="col">
          <ul className="list-group">
            {product.map((item) => (
              <li className="list-group-item">{item.title}</li>
            ))}
            {/* <li className="list-group-item">Node.js</li>
            <li className="list-group-item">React.js</li> */}
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
    </div>
  );
}
