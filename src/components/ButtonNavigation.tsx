import React from "react";
import { RxCountdownTimer } from "react-icons/rx";
import { GrFavorite } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

interface BottonNavigationProps {
  onChange: (newValue: number) => void;
  value: number;
}

const BottonNavigation: React.FC<BottonNavigationProps> = ({
  onChange,
  value,
}) => {
  return (
    <nav className=" w-[500px] ml-[350px] bg-gray-100 p-4 flex justify-between items-center border-t border-gray-300">
      <button
        className={` text-3xl  focus:outline-none ${value === 0 ? "text-blue-500" : "text-gray-500"}`}
        onClick={() => onChange(0)}
      >
        <RxCountdownTimer />
      </button>
      <button
        className={` text-3xl focus:outline-none ${value === 1 ? "text-blue-500" : "text-gray-500"}`}
        onClick={() => onChange(1)}
      >
        <GrFavorite />
      </button>
      <button
        className={` text-3xl focus:outline-none ${value === 2 ? "text-blue-500" : "text-gray-500"}`}
        onClick={() => onChange(2)}
      >
        <IoLocationOutline />
      </button>
    </nav>
  );
};

export default BottonNavigation;
