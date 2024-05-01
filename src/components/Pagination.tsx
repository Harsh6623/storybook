import React from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  color?: "primary" | "secondary" | "standard";
  getItemAriaLabel?: (type: string, page: number, selected: boolean) => string;
  shape?: "circular" | "rounded";
  size?: "small" | "medium" | "large";
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  color = "standard",
  getItemAriaLabel,
  shape = "circular",
  size = "medium",
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getColorClass = (pageNum: number) => {
    if (pageNum === currentPage) {
      switch (color) {
        case "primary":
          return "bg-blue-500 text-white";
        case "secondary":
          return "bg-green-500 text-white";
        default:
          return "bg-gray-500 text-white";
      }
    } else {
      return "hover:bg-gray-200";
    }
  };

  const getShapeClass = () => {
    return shape === "rounded" ? "rounded-md" : "rounded-full";
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "text-sm";
      case "large":
        return "text-lg";
      default:
        return "";
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i <= 5 || i === totalPages) {
      pageNumbers.push(
        <li
          key={i}
          className={`cursor-pointer px-2 py-1 ${getShapeClass()} ${getColorClass(i)} ${getSizeClass()}`}
          onClick={() => handleClick(i)}
          aria-label={
            getItemAriaLabel
              ? getItemAriaLabel("page", i, i === currentPage)
              : undefined
          }
        >
          {i}
        </li>
      );
    } else if (i === 6) {
      pageNumbers.push(
        <li key={`ellipsis`} className={`px-2 py-1 text-gray-600`}>
          ...
        </li>
      );
    }
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        <li
          className={`cursor-pointer px-2 py-1 ${getShapeClass()} ${getSizeClass()} ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"}`}
          onClick={handlePrevClick}
          aria-label={
            getItemAriaLabel
              ? getItemAriaLabel("previous", currentPage - 1, false)
              : undefined
          }
        >
          {"<"}
        </li>
        {pageNumbers}
        <li
          className={`cursor-pointer px-2 py-1 ${getShapeClass()} ${getSizeClass()} ${currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"}`}
          onClick={handleNextClick}
          aria-label={
            getItemAriaLabel
              ? getItemAriaLabel("next", currentPage + 1, false)
              : undefined
          }
        >
          {">"}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
