import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import { Box } from "@mui/material";
import StudyList from "./components/StudyList";

console.log(reactData);

function App() {
  return (
    <div className="App">
      <h1>React Basic Review Mission 2</h1>

      <p>전체 학습 항목 수: {reactData.length}개</p>

      <h3>학습 목록</h3>

      <StudyList items={reactData} />
    </div>
  );
}

export default App;
