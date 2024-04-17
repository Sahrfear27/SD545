import React, { useEffect, useState } from "react";
import ProductList from "./components/product-list";
import AddProduct from "./components/add-product";
import Product from "./Types/types";
import axios from "axios";
import productService from "./apis/Services/product.service";

function App() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function productData() {
      const products = await productService.getProducts();

      setProduct(products.data);
    }
    productData();
  }, []);
  const addProducts = (newProduct: Product) => {
    setProduct([...product, newProduct]);
  };
  return (
    <div className="container">
      <ProductList products={product} />
      <AddProduct onGetAdd={addProducts} />
    </div>
  );
}

export default App;
