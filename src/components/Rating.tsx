import React from "react";
import { FaRegStar } from "react-icons/fa";

interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="relative">
          <FaRegStar
            className={`h-6 w-6 fill-current ${
              index < value ? "text-yellow-500" : "text-gray-300"
            }`}
          />
          {index < value && (
            <div
              style={{
                width: `${(value - index) * 20}%`,
                backgroundColor: "yellow",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
