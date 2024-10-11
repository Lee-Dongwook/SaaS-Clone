import React from 'react';

interface IButton {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ className, onClick, children }: IButton) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
