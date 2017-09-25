import React from "react";
import "./Practice.css";

function PracticeComponent({ practice }) {
  const practiceStyle = {
    backgroundColor: practice.color.background,
    color: practice.color.foreground
  };
  return (
    <div className="practice" style={practiceStyle}>
      <div className="container">
        <div className="icon">
          <i className={practice.icon} />
        </div>
        <div className="content">
          <h1>{practice.title}</h1>
          <p>{practice.tagline}</p>
        </div>
      </div>
    </div>
  );
}

export default PracticeComponent;
