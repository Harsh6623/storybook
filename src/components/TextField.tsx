import React from "react";

interface TextFieldProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  size?: "small" | "medium" | "large";
  type?: string;
  sx?: object;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  size = "medium",
  type = "text",
  sx,
  inputProps,
}) => {
  const inputSizeClass =
    size === "small"
      ? "text-sm p-2"
      : size === "large"
        ? "text-lg p-4"
        : "text-base p-3";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <div className="flex flex-col" style={sx}>
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        type={type}
        {...inputProps}
        className={`border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputSizeClass}`}
      />
    </div>
  );
};

export default TextField;
