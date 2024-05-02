import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth = "xl" }) => {
  let maxWidthClass = "";
  switch (maxWidth) {
    case "xs":
      maxWidthClass = "max-w-screen-xs";
      break;
    case "sm":
      maxWidthClass = "max-w-screen-sm";
      break;
    case "md":
      maxWidthClass = "max-w-screen-md";
      break;
    case "lg":
      maxWidthClass = "max-w-screen-lg";
      break;
    case "xl":
      maxWidthClass = "max-w-screen-xl";
      break;
    case false:
      maxWidthClass = "";
      break;
    default:
      maxWidthClass = `max-w-${maxWidth}`;
      break;
  }

  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass}`}>
      {children}
    </div>
  );
};

export default Container;
