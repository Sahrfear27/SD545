import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import SignUp from "./Component/Signup/signUp";

import { useEffect, useState } from "react";
type Item = {
  items: string;
  description: string;
  price: number;
};
// function App() {
//   const [item, setItem] = useState<Item[]>([]);
//   useEffect(() => {
//     async function data() {
//       try {
//         // const response = await axios.get("/items");
//         const response = await axios.get("http://localhost:4004/items");
//         const fetchItems = response.data.data;
//         setItem(fetchItems);
//       } catch (e) {
//         console.log("Fail to fetch");
//       }
//     }
//     data();
//   }, []);
//   return (
//     <div className="App">
//       <h3>Items</h3>
//       <ul>
//         {item.map((product) => (
//           <li>
//             <p>{product.items}</p>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  return (
    <div className="border">
      <h4>Main Page</h4>
      <SignUp />
    </div>
  );
}
export default App;
