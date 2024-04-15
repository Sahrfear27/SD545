import { useState } from "react";
import { nanoid } from "nanoid";
import "bootstrap/dist/css/bootstrap.css";
type User = {
  id: string;
  name: string;
  lname: string;
};

type Props = {
  datas: User[];
  onDeleteUser: (id: string) => void;
};
function Child(props: Props) {
  const { datas, onDeleteUser } = props;
  const handleButton = () => {
    datas.forEach((items) => onDeleteUser(items.id));
  };
  return (
    <div className="border m-2 p-3">
      <h4>Child</h4>
      <button onClick={handleButton}>Delete User</button>
    </div>
  );
}

function App() {
  const [user, setUser] = useState<User[]>([
    {
      id: nanoid(),
      name: "Sahrfear",
      lname: "Macarthy",
    },
  ]);

  // Callback to receive the data
  const deleteData = (id: string) => {
    const data = user.filter((items) => items.id !== id);
    setUser(data);
  };
  return (
    <div className="border m-5 p-4">
      <h4>Parent</h4>
      {user.map((items) => (
        <p key={items.id}>
          id:&nbsp;{items.id}
          <br />
          first name:&nbsp;{items.name}
          <br />
          last name:&nbsp;{items.lname}
        </p>
      ))}
      <Child datas={user} onDeleteUser={deleteData} />
    </div>
  );
}

export default App;
