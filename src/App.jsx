import "./App.css";
import reactData from "./data/data.json";

console.log(reactData);

const rd = reactData;

function App() {
  return (
    <div className="App">
      <h1>React Basic Review Mission 2</h1>

      <p>전체 학습 항목 수: {rd.length}개</p>
    </div>
  );
}

export default App;
