import React from "react";
import FileUpload from "./FileUpload";
import "./info.css";

function Info() {
  return (
    <div className="info-container">
      <div className="info-text-container">
        <p className="info-text">
          Our members can have daily free AI heart sound analysis, so you can
          monitor your loved ones heart on day to day basis and consult
          cardiologist earlier.
        </p>
        <p className="info-text">
          Upload your heart sound recorded by DilDost device below and get
          instant AI heart sound analysis.
        </p>
      </div>
      <div className="file-upload">
        {/* File upload component here */}
        <FileUpload />
      </div>
      <div className="waitlist-container">
        <p className="waitlist-text">
          Join waitlist to get DilDost device :{" "}
          <span className="mail-text">contact@ibloom.ai</span>
        </p>
      </div>
    </div>
  );
}

export default Info;
