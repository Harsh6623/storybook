import React from "react";

interface CheckBoxProps {
  id?: string;
  size?: "small" | "medium" | "large";
  label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  size = "medium",
  label = "CheckBox",
  ...props
}) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "h-4 w-4";
      case "medium":
        return "h-6 w-6";
      case "large":
        return "h-8 w-8";
      default:
        return "h-6 w-6";
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className={`form-checkbox ${getSizeClass()}`}
        {...props}
      />
      <label htmlFor={id} className="ml-2 select-none">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
