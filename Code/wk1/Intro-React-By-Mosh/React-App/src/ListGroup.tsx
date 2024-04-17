// import { MouseEvent } from "react";
/*
Render the data dynamically
Error without the key:
 Warning: Each child in a list should have a unique "key" prop: React need this to keep track of our items so later when we add or remove data dynamically, react knows what part of the code to be updated
Note: Inside the jsx, you can only write html element or other react component. Only exception is using cruly breces
*/

import { useState } from "react";

/*
setting condition dynamically

const getMessage = () => {
   return states.length === 0 ? <p>No Country Found</p> : null;
  };
  {states.length === 0 && <p>No Country found</p>}

true && 1 : ans is 1
true && "sahr" : ans is sahr ==> if condition is true, the expression will be printed
false && "sahr" : ans is false
*/

function ListGroup() {
  let states = ["New York", "San Francisco", "Iowa", "Chicago", "Maryland"];
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //let selectedIndex = 0; //no item selected. This variable is local to the component and react is not aware of it. useState will tell react that this data or change overtime

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] // varable(selectedIndex)
  //   arr[1] //updater function

  const result = states.map((items, index) => (
    <li
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={index}
      //   onClick={handleClick}
      onClick={() => {
        // SelectedIndex = index;
        setSelectedIndex(index);
      }} //set selected index to the index of the item
    >
      {items}
    </li>
  ));

  return (
    <>
      <h1>List of Items</h1>
      <ul className="list-group">{result}</ul>
    </>
  );
}

/*
Passing data via props
props are input to our code
1. decide the shape of the input. 
. pass two object: 1, item:[], heading:string
*/
export default ListGroup;

// interface Props{
//     items :string[],
//     heading:string
// }
