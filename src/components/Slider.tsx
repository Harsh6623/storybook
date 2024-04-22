import React, { useState } from "react";
import { ImVolumeLow } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}
const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  size = "medium",
  color = "primary",
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setInternalValue(newValue);
    onChange(newValue);
  };
  const sizeClasses = {
    small: "w-[80px]",
    medium: "w-[120px]",
    large: "w-[160px]",
  };
  const colorClasses = {
    primary: "text-blue-500",
    secondary: "text-gray-500",
    error: "text-red-500",
    info: "text-blue-300",
    success: "text-green-500",
    warning: "text-yellow-500",
  };
  const sliderSizeClass = sizeClasses[size] || sizeClasses.medium;
  const sliderColorClass = colorClasses[color] || colorClasses.primary;
  return (
    <div className="flex items-center">
      <ImVolumeLow className={`text-lg ${sliderColorClass} mr-2`} />
      <input
        type="range"
        className={`h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-white-700 ${sliderSizeClass} ${sliderColorClass}`}
        value={internalValue}
        onChange={handleChange}
        min={0}
        max={100}
      />
      <span className={`ml-2 text-xs ${sliderColorClass}`}>
        {internalValue}
      </span>
      <ImVolumeHigh className={`text-lg ${sliderColorClass} ml-3`} />
    </div>
  );
};
export default Slider;
