import React from "react";

export interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="bg-gray-200 p-4">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Grid;
