import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import { Box } from "@mui/material";

console.log(reactData);

const boxStyle = "mui-custom-box";

function App() {
  return (
    <div className="App">
      <h1>React Basic Review Mission 2</h1>

      <p>전체 학습 항목 수: {reactData.length}개</p>

      <h3>첫 번째 데이터 출력</h3>

      <Box className={boxStyle}>
        <StudyInfo
          title={reactData[0].title}
          desc={reactData[0].desc}
          category={reactData[0].category}
        />
      </Box>
    </div>
  );
}

export default App;
