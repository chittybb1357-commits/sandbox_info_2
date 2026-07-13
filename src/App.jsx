import "./App.css";
import reactData from "./data/data.json";
// import StudyInfo from "./components/StudyInfo";
// import StudyList from "./components/StudyList";
// import { Box, Button, Stack, TextField } from "@mui/material";
// import { useState } from "react";

function App() {
  console.log(reactData);

  return (
    <>
      <h1>React Mission 7</h1>
      <p>전체 학습 항목수 : {reactData.length}개</p>
    </>
  );
}

export default App;
