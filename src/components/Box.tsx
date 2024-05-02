import React from "react";

export default function CustomBox() {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: 4,
        backgroundColor: "#007FFF",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#0066CC";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#007FFF";
      }}
    />
  );
}
