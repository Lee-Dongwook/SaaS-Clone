import React from "react";

interface IInput {
  className?: string;
  type: "text" | "email" | "password";
  value: string;
  placeholder?: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const Input = ({
  className,
  type,
  value,
  placeholder,
  onChange,
}: IInput) => {
  return (
    <input
      type={type}
      className={`shadow appearance-none border rounded py-2 px-3 text-gray-darker ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
