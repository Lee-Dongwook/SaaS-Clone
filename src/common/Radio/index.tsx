import React from "react";

interface IRadio {
  className?: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Radio = ({
  className,
  name,
  label,
  checked,
  onChange,
}: IRadio) => {
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="form-radio"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};
