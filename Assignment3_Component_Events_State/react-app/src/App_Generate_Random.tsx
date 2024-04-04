import { useState } from "react";

function GenerateRandom() {
  const [randomValue, setRandomNumner] = useState<number | null>(null);

  const randomHandler = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setRandomNumner(randomNumber);
  };
  return (
    <div>
      <h3>Generate Random Numbers</h3>
      <div className="card bg-secondary text-white">
        <button onClick={randomHandler}>Generate</button>
        &nbsp;
        <span>{randomValue}</span>
      </div>
    </div>
  );
}
export default GenerateRandom;
