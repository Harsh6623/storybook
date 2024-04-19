import React from "react";

interface RadioGroupProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <div>
      <h3>Gender</h3>
      {options.map((option) => (
        <label key={option.value} className=" mt-3 block mb-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => handleChange(option.value)}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
