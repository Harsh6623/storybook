import React from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "danger" | "success";
  orientation?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  color = "primary",
  orientation = "horizontal",
  size = "medium",
  variant = "contained",
  onClick,
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

  let colorClass = "";
  switch (color) {
    case "primary":
      colorClass = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "secondary":
      colorClass = "bg-gray-300 text-gray-800 hover:bg-gray-400";
      break;
    case "danger":
      colorClass = "bg-red-500 text-white hover:bg-red-600";
      break;
    case "success":
      colorClass = "bg-green-500 text-white hover:bg-green-600";
      break;
    default:
      colorClass = "bg-blue-500 text-white hover:bg-blue-600";
  }

  return (
    <div className={`flex ${orientationClass} rounded-md overflow-hidden`}>
      {React.Children.map(children, (child, index) => (
        <button
          key={index}
          className={`w-24 flex-1 focus:outline-none ${sizeClass} ${variantClass} ${colorClass}`}
          onClick={onClick}
        >
          {child}
        </button>
      ))}
    </div>
  );
};
export default ButtonGroup;
