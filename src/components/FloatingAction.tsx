import React from "react";
import tinycolor from "tinycolor2";

type FloatingActionButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "extended";
};

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  children,
  backgroundColor = "#3b82f6",
  size = "large",
  variant = "circular",
}) => {
  const textColor = getContrastColor(backgroundColor);

  const sizeClass =
    size === "small" ? "p-2" : size === "medium" ? "p-3" : "p-4";

  const variantClass = variant === "extended" ? "rounded-lg" : "rounded-full";

  return (
    <button
      onClick={onClick}
      className={`shadow-lg hover:bg-blue-700 transition-all duration-300 ${sizeClass} ${variantClass}`}
      aria-label="Floating Action Button"
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {children}
    </button>
  );
};

function getContrastColor(backgroundColor: string) {
  const color = tinycolor(backgroundColor);
  return color.isLight() ? "#000" : "#FFF";
}

export default FloatingActionButton;
