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
  const [category, setCategory] = useState("All");
  const onSelect = _id => {
    setSelectedId(_id);
  };
  const filteredData = reactData.filter(item => {
    return category === "All" || category === item.category;
  });

  console.log(filteredData);

  return (
    <>
      <h1>React Mission 7</h1>

      <p>전체 학습 항목수 : {reactData.length}개</p>
      <hr />
      <StudyInfo title={m2Content.title} desc={m2Content.desc} category={m2Content.category} />
      <hr />
      <h2>필터</h2>

      <div className="filters">
        <button>All</button>

        <button>concept</button>

        <button>library</button>

        <button>hook</button>
      </div>
      <hr />
      <StudyList items={filteredData} onSelect={onSelect} selectedId={selectedId} />
    </>
  );
}

export default App;
