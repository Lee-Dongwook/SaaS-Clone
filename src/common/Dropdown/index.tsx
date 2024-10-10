import React, { useState } from "react";

interface IDropdown {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export const Dropdown = ({ options, selected, onChange }: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        {selected}
      </button>
      {isOpen && (
        <ul className="absolute bg-white shadow rounded mt-2 py-1 w-full z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
