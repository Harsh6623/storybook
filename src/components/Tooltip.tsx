import React, { useState } from "react";
import { motion } from "framer-motion";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="whitespace-nowrap">{children}</div>;
};

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute z-10 bg-white text-black py-1 px-2 rounded shadow-md"
      >
        <TooltipContent>{content}</TooltipContent>
      </motion.div>
    </div>
  );
};

export default Tooltip;
