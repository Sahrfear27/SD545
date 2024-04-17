import { ChangeEvent, FormEvent, useState } from "react";
import Product from "../Types/types";
import productService from "../apis/Services/product.service";
import axios from "axios";
type Props = {
  onGetAdd: (newProducts: Product) => void;
};

export default function AddProduct(props: Props) {
  const [product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    description: "",
  });
  const { onGetAdd } = props;

  const { title, price, description } = product;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setProduct({ ...product, description: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await productService.addNewPost({
      title,
      price,
      description,
    });
    if (response.status === 201) {
      onGetAdd(response.data);
      setProduct({ title: "", price: 0, description: "" });
    }
  };
  return (
    <div>
      <h2>Add a new Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            value={description}
            onChange={handleDescription}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
