import "./App.css";
import reactData from "./data/data.json";
import StudyList from "./components/StudyList";
import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [category, setCategory] = useState("all");
  const [keyword, setKeyword] = useState("");
  const handleSelect = id => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };
  const filteredItems = () => {
    return reactData.filter(item => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesKeyword = item.title.toLowerCase().includes(keyword.toLowerCase());

      return matchesCategory && matchesKeyword;
    });
  };
  const categories = [
    { value: "all", label: "전체" },
    { value: "concept", label: "concept" },
    { value: "library", label: "library" },
    { value: "hook", label: "hook" },
  ];

  return (
    <div className="App">
      <h1>React Basic Review Mission 2</h1>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 3,
        }}
      >
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

        <p>전체 학습 항목 수: {filteredItems().length}개</p>
      </Stack>

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="검색할 제목을 입력하세요..."
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        sx={{ mb: 3, backgroundColor: "#ffffff", borderRadius: "4px" }}
      />

      <h3>학습 목록</h3>

      <StudyList items={filteredItems()} selectedId={selectedId} onSelect={handleSelect} />
    </div>
  );
}

export default App;
