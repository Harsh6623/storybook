import React from "react";

export interface PaperProps {
  children: React.ReactNode;
}

const Paper: React.FC<PaperProps> = ({ children }) => {
  return (
    <>
      <div className="bg-white w-56 h-64 rounded-md shadow-lg p-4 flex">
        {children}
      </div>
    </>
  );
};

export default Paper;
