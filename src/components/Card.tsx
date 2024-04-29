import React from "react";
import { FcLike } from "react-icons/fc";

export interface CardProps {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, date, imageUrl, description }) => {
  return (
    <div className="bg-white w-[345px]  shadow-md rounded-md p-4 ml-[500px] mt-10 ">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500">{date}</p>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="mr-2 text-3xl">
            <FcLike />
          </button>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
