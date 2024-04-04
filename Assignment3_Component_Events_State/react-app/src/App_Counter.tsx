import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(++count);
  };
  const decrementHandler = () => {
    setCount(--count);
  };
  return (
    <div className="card bg-secondary text-white">
      <h3>Increment and Decrement</h3>
      <p>
        <button onClick={incrementHandler}>Increment</button>
        &nbsp;
        {count}
        &nbsp;
        <button onClick={decrementHandler}>Decrement</button>
      </p>
    </div>
  );
}
export default Counter;
