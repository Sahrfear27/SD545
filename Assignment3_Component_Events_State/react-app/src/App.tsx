import Counter from "./App_Counter";
import ConvertTemperature from "./App_ConvertTemp";
import GenerateRandom from "./App_Generate_Random";
function App() {
  return (
    <>
      <div className="container p-5 my-5 bg-dark text-white text-center border">
        <Counter />
        <br></br>
        <br></br>
        <ConvertTemperature />
        <br></br>
        <br></br>
        <GenerateRandom />
      </div>
    </>
  );
}
export default App;
