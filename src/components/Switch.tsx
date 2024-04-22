import React, { useState } from "react";
export interface SwitchProps {
  onChange: (checked: boolean) => void;
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  size?: "small" | "medium" | "large";
}
const Switch: React.FC<SwitchProps> = ({
  onChange,
  color = "primary",
  size = "medium",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };
  return (
    <div
      className={`relative inline-block ${
        size === "small" ? "w-6" : size === "large" ? "w-12" : "w-10"
      } mr-2 align-middle select-none transition duration-200 ease-in`}
      onClick={toggleSwitch}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        className={`toggle-checkbox absolute block ${
          size === "small"
            ? "w-4 h-4"
            : size === "large"
              ? "w-8 h-8"
              : "w-6 h-6"
        } rounded-full bg-white border-4 appearance-none cursor-pointer ${
          isChecked ? "right-0" : "left-0"
        } ${color === "primary" ? "border-blue-500" : ""} ${
          color === "secondary" ? "border-gray-500" : ""
        } ${color === "error" ? "border-red-500" : ""} 
        } ${color === "success" ? "border-green-500" : ""} ${
          color === "warning" ? "border-yellow-500" : ""
        }`}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label block overflow-hidden ${
          size === "small" ? "h-4" : size === "large" ? "h-8" : "h-6"
        } rounded-full bg-gray-300 cursor-pointer`}
      />
    </div>
  );
};
export default Switch;
