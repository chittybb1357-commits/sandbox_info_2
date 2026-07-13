import React from "react";
import { Box } from "@mui/material";

export default function StudyList({ items, selectedId, onSelect }) {
  const boxStyle = "mui-custom-box";

  return (
    <div className="study-list">
      {items &&
        items.map(item => {
          const isSelected = item.id === selectedId;

          return (
            <Box
              key={item.id}
              className={`${boxStyle} ${isSelected ? "active" : ""}`}
              onClick={() => onSelect(item.id)}
              style={{ cursor: "pointer" }}
            >
              <h2>
                {item.id}. {item.title}
              </h2>

              <p>{item.desc}</p>

              {isSelected && <p className="active-text">선택된 항목입니다.</p>}
            </Box>
          );
        })}
    </div>
  );
}
