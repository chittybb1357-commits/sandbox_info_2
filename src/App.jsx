import "./App.css";
import reactData from "./data/data.json";
import StudyList from "./components/StudyList";
import { useState } from "react";
import { Button, Stack } from "@mui/material";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("all");
  const handleSelect = id => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };
  const filteredItems = () => {
    return category === "all" ? reactData : reactData.filter(item => item.category === category);
  };
  const categories = [
    { value: "all", label: "전체" },
    { value: "concept", label: "concept" },
    { value: "library", label: "library" },
    { value: "hook", label: "hook" },
  ];

  return (
    <div className="App">
      {/* <Stack 
        direction="row" 
        spacing={2} 
        sx={{ 
          mb: 3, 
          justifyContent: "flex-start", 
          alignItems: "center", 
          mt: 3 
        }}
      > */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, justifyContent: "flex-start", mt: 3 }}>
        {categories.map(cat => (
          <Button
            key={cat.value}
            variant={category === cat.value ? "contained" : "outlined"}
            onClick={() => setCategory(cat.value)}
            size="small"
          >
            {cat.label}
          </Button>
        ))}

        {/* <p style={{ margin: 0, marginLeft: "auto", fontSize: "0.95rem", color: "#777777" }}> */}
      </Stack>

      <h1>React Basic Review Mission 2</h1>

      <p>전체 학습 항목 수: {filteredItems().length}개</p>

      <h3>학습 목록</h3>

      <StudyList items={filteredItems()} selectedId={selectedId} onSelect={handleSelect} />
    </div>
  );
}

export default App;
