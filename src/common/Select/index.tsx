import React from "react";

interface ISelect {
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ options, selectedValue, onChange }: ISelect) => {
  return (
    <select
      className="form-select block w-full mt-1"
      value={selectedValue}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
