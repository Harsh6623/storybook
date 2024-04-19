import React from "react";

interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  fullWidth?: boolean;
  endIcon?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  backgroundColor = "#3b82f6",
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

  const variantClasses = {
    contained: "border border-transparent",
    outlined: "border border-current bg-transparent",
    text: "bg-transparent",
  };

  const fullWidthClass = fullWidth ? "w-full" : "";

  const buttonClasses = `
        rounded ${sizeClasses[size]} ${fullWidthClass}
    `;

  const textColor = getContrastColor(backgroundColor);
  const ButtonElement = href ? "a" : "button";

  return (
    <ButtonElement
      href={href}
      type={href ? undefined : "button"}
      className={buttonClasses}
      style={{
        backgroundColor: backgroundColor || "",
        color: textColor,
      }}
    >
      {label}
      {endIcon}
    </ButtonElement>
  );
};

function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export default Button;
