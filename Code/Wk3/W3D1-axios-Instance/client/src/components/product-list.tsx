import Product from "../Types/types";
import productService from "../apis/Services/product.service";

type Props = {
  products: Product[];
};
export default function ProductList(props: Props) {
  const { products } = props;
  const handleDelete = async () => {
    // return products.filter((items)=>{
    //   if(items.id !== productService.deletePost)
    // })
    const deletePost = await productService.deletePost("1");
  };
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>

              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
