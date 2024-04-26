import React, { useState } from "react";
interface TooltipProps {
  children: React.ReactNode;
}
const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative inline-block">
      <div
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && <div className="text-black m-1 p-1">This is a tooltip</div>}
    </div>
  );
};
export default Tooltip;
