import { ChangeEvent, useState } from "react";

function ConvertTemperature() {
  const [inputValue, setInputValue] = useState("");
  const [celciusResult, setCelciusResult] = useState<number | null>(null);
  const [fahrenResult, setFahrenResult] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const convertToCelcius = () => {
    const tempValue = parseInt(inputValue);
    const result = ((tempValue - 32) * 5) / 9;
    setCelciusResult(parseFloat(result.toFixed(2)));
  };
  const convertToFahrenheit = () => {
    const tempValue = parseInt(inputValue);
    const result = (tempValue * 9) / 5 + 32;
    setFahrenResult(parseFloat(result.toFixed(2)));
  };

  return (
    <div className="card bg-info text-white">
      <h3>Convert Temperature</h3>
      <p>
        <label>Enter Temperature</label>
        &nbsp;
        <input type="number" value={inputValue} onChange={handleChange} />
      </p>

      <p>
        <button onClick={convertToCelcius}>Convert to Celcius</button>
        &nbsp;
        {celciusResult !== null && <span>Celcius: {celciusResult}</span>}
      </p>
      <p>
        <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
        &nbsp;
        {fahrenResult !== null && <span>Fahrenheit: {fahrenResult}</span>}
      </p>
    </div>
  );
}
export default ConvertTemperature;
