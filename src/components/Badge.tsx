import React from "react";
import { FaShoppingCart } from "react-icons/fa";
export interface BadgeProps {
  count: number;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  shape?: "circular" | "rectangular";
}
const Badge: React.FC<BadgeProps> = ({
  count,
  color = "primary",
  shape = "rectangular",
  ...props
}) => {
  const displayCount = count >= 0 ? count : 0;
  const getColorClass = () => {
    switch (color) {
      case "secondary":
        return "bg-gray-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      case "primary":
      default:
        return "bg-blue-800 text-white";
    }
  };
  const getShapeClass = () => {
    return shape === "circular" ? "rounded-full" : "rounded";
  };
  return (
    <div className="relative inline-block">
      <FaShoppingCart className="h-10 w-10" />
      {displayCount > 0 && (
        <span
          className={`absolute top-0 right-0 w-7 h-7 flex items-center justify-center text-xs font-bold ${getShapeClass()} ${getColorClass()}`}
          style={{
            transform: "translate(50%, -50%)",
          }}
          {...props}
        >
          {displayCount >= 100 ? "100+" : displayCount}
        </span>
      )}
    </div>
  );
};
export default Badge;
