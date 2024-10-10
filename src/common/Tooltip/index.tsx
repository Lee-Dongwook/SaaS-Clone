import React, { useState } from "react";

interface ITooltip {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: ITooltip) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
            {text}
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
      )}
    </div>
  );
};
