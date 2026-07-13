import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import { useState } from "react";
// import { Box, Button, Stack, TextField } from "@mui/material";

function App() {
  console.log(reactData);

  const m2Content = reactData[0];
  const [selectedId, setSelectedId] = useState(null);
  const onSelect = _id => {
    setSelectedId(_id);
  };

  return (
    <>
      <h1>React Mission 7</h1>

      <p>전체 학습 항목수 : {reactData.length}개</p>
      <hr />
      <StudyInfo title={m2Content.title} desc={m2Content.desc} category={m2Content.category} />
      <hr />
      <StudyList items={reactData} onSelect={onSelect} selectedId={selectedId} />
    </>
  );
}

export default App;
