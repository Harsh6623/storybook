import React from "react";

export interface ProgressProps {
  progress: number;
}

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  const progressWidth = `${progress}%`;

  return (
    <div className="bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
        style={{ width: progressWidth }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Progress;
