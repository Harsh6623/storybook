import React from "react";

interface DenseMenuItem {
  text: string;
  isSelected?: boolean;
}

interface DenseMenuProps {
  items: DenseMenuItem[];
}

const DenseMenu: React.FC<DenseMenuProps> = ({ items }) => {
  return (
    <div className="w-64 border border-gray-300 rounded-md shadow-md">
      <ul className="divide-y divide-gray-300">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-3 ${
              item.isSelected ? "bg-gray-100" : ""
            } hover:bg-gray-100`}
          >
            <span>{item.text}</span>
            {item.isSelected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.293a1 1 0 0 1 1.414-1.414L9 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DenseMenu;
