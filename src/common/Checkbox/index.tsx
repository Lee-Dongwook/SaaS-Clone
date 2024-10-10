import React from "react";

interface ICheckbox {
  className?: string;
  label: string;
  checked: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  className,
  label,
  checked,
  onChange,
}: ICheckbox) => {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="checkbox"
        className="form-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};
