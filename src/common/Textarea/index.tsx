import React from "react";

interface ITextarea {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  className,
  placeholder,
  value,
  onChange,
}: ITextarea) => {
  return (
    <textarea
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-darker ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
