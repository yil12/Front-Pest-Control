import React from "react";
import "../style/css/SectionDivider.css";

const SectionDivider = ({ icon = "✧", label = "" }) => {
  return (
    <div className="section-divider">
      <span>{label || icon}</span>
    </div>
  );
};

export default SectionDivider;
