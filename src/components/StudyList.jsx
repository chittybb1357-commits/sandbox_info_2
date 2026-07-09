import React from "react";
import { Box } from "@mui/material";

export default function StudyList({ items }) {
  const boxStyle = "mui-custom-box";

  return (
    <div className="study-list">
      {items &&
        items.map(item => (
          <Box key={item.id} className={boxStyle}>
            <h2>
              {item.id}. {item.title}
            </h2>

            <p>{item.desc}</p>
          </Box>
        ))}
    </div>
  );
}
