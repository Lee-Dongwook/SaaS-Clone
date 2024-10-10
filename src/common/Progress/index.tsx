import React from "react";

interface IProgress {
  percent: number;
}

export const Progress = ({ percent }: IProgress) => {
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-blue-500 text-xs font-medium text-blue-500 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${percent}%` }}
      >
        {percent}%
      </div>
    </div>
  );
};
