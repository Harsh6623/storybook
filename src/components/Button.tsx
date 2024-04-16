import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  Colorvariant?: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
  backgroundColor?: string;
  fullWidth?: boolean;
  endIcon?: React.ReactNode;
  variant?: "contained" | "outlined" | "text" | string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "medium",
  Colorvariant = "primary",
  disabled = false,
  backgroundColor,
  fullWidth = false,
  endIcon,
  variant = "text",
  href,
}) => {
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  const textColor = disabled
    ? "#FFFFFF"
    : backgroundColor
      ? getContrastColor(backgroundColor)
      : "#FFFFFF";

  const ColorvariantClasses = {
    primary: backgroundColor ? "" : "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: backgroundColor
      ? ""
      : "bg-gray-500 hover:bg-gray-600 text-white",
    danger: backgroundColor ? "" : "bg-red-500 hover:bg-red-600 text-white",
    success: backgroundColor
      ? ""
      : "bg-green-500 hover:bg-green-600 text-white",
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  let variantClasses = "";
  switch (variant) {
    case "contained":
      variantClasses = "bg-opacity-100 border-transparent";
      break;
    case "outlined":
      variantClasses = "border border-current bg-transparent";
      break;
    case "text":
    default:
      variantClasses = "bg-transparent";
  }

  const buttonClasses = `
    rounded ${sizeClasses[size]} ${ColorvariantClasses[Colorvariant]}
    ${fullWidthClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        style={{ backgroundColor, color: textColor }}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
      >
        {label}
        {endIcon && endIcon}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={buttonClasses}
        style={{ backgroundColor, color: textColor }}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        {label}
        {endIcon && endIcon}
      </button>
    );
  }
};

function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export default Button;
