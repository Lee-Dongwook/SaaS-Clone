import React from "react";

interface ICard {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: ICard) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {children}
      </div>
    </div>
  );
};
