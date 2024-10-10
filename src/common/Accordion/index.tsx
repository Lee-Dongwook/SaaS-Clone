import { useState } from "react";

interface IAccordion {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left">
        {title}
      </button>
      {isOpen && <div className="p-4 border-t border-b">{children}</div>}
    </div>
  );
};
