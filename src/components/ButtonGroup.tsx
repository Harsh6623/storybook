import React from "react";
import tinycolor from "tinycolor2";

interface ButtonGroupProps {
  children: React.ReactNode;
  backgroundColor?: string;
  orientation?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  // onClick?: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  backgroundColor = "#3b82f6",
  orientation = "horizontal",
  size = "medium",
  variant = "contained",
  // onClick,
}: ButtonGroupProps) => {
  const orientationClass = orientation === "vertical" ? "flex-col" : "flex-row";

  const sizeClass =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
        ? "px-4 py-2 text-lg"
        : "px-3 py-2";

  const variantClass =
    variant === "outlined" ? "border" : variant === "text" ? "" : "shadow-md";

  const textColor = getContrastColor(backgroundColor);

  return (
    <div className={`flex ${orientationClass} rounded-md overflow-hidden`}>
      {React.Children.map(children, (child, index) => (
        <button
          key={index}
          className={`w-24 flex-1 focus:outline-none ${sizeClass} ${variantClass}`}
          // onClick={onClick}
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        >
          {child}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

function getContrastColor(backgroundColor: string) {
  const color = tinycolor(backgroundColor);
  return color.isLight() ? "#000" : "#FFF";
}
