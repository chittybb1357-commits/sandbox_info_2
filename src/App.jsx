import "./App.css";
import reactData from "./data/data.json";
import StudyInfo from "./components/StudyInfo";
import StudyList from "./components/StudyList";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

// [전체] 너비 맞춤: 인풋창과 모든 리스트 박스들의 가로 길이를 600px로 일치시킵니다.
const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  width: "100%",
  boxSizing: "border-box",
};

// 상단 고정 박스 ('첫 번째 데이터 출력' 컴포넌트를 담는 영역)
const fixedBoxStyle = {
  mt: 2,
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  padding: "24px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
  textAlign: "center",
  color: "#777777",
  width: "100%",
  boxSizing: "border-box",

  // 폰트 크기 및 스타일 통일:
  "& h2": {
    fontSize: "1.4rem",
    fontWeight: "normal",
    color: "#777777",
    marginTop: 0,
    marginBottom: "12px",
  },
};

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
    <div className="App" style={{ width: "100%", maxWidth: "100%" }}>
      <h1>React Basic Review Mission 2</h1>

      <p>전체 학습 항목 수: {reactData.length}개</p>

      <Box sx={{ textAlign: "left", mb: 1 }}>
        <h3 style={{ fontSize: "1.25rem", margin: "0 0 0 4px", fontWeight: "normal" }}>
          첫 번째 데이터 출력
        </h3>
      </Box>

      <Box sx={fixedBoxStyle}>
        <StudyInfo
          title={reactData[0].title}
          desc={reactData[0].desc}
          category={reactData[0].category}
        />
      </Box>

      <hr style={{ border: "0.5px solid #e0e0e0", margin: "40px 0", width: "100%" }} />

      <Box sx={containerStyle}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mb: 3,
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 3,
            width: "100%",
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

          <p style={{ margin: 0, marginLeft: "20px", fontSize: "0.95rem", color: "#777777" }}>
            전체 학습 항목 수: {filteredItems().length}개
          </p>
        </Stack>

        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="검색할 제목을 입력하세요..."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          sx={{ mb: 4, backgroundColor: "#ffffff", borderRadius: "4px" }}
        />

        <Box sx={{ textAlign: "left", mb: 1 }}>
          <h3 style={{ fontSize: "1.25rem", margin: "0 0 0 4px", fontWeight: "normal" }}>
            학습 목록
          </h3>
        </Box>

        <StudyList items={filteredItems()} selectedId={selectedId} onSelect={handleSelect} />
      </Box>
    </div>
  );
}

export default App;
