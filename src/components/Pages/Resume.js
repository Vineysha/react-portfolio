import React from "react";
import PDF from "../../assets/Resume.pdf";
import "./Resume.css"; // Import your CSS file for resume styling

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume">
        <h1>Resume</h1>
        <object width="100%" height="800" data={PDF} type="application/pdf">Resume PDF</object>

      </div>
    </div>
  );
}

