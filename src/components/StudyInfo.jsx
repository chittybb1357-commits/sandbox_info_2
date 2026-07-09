import React from "react";

export default function StudyInfo({ title, desc, category }) {
  return (
    <div className="study-info-card">
      <h2>{title}</h2>

      <p>{desc}</p>

      <p>분류: {category}</p>
    </div>
  );
}
