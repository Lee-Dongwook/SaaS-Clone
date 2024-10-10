import React from "react";

interface IBadge {
  text: string;
  color: string;
}

export const Badge = ({ text, color }: IBadge) => {
  return (
    <span
      className={`bg-${color}-500 text-white px-2 py-1 rounded-full text-xs font-semibold`}
    >
      {text}
    </span>
  );
};
