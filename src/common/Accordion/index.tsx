'use client';
import React, { useState } from "react";
import { ChevronRight } from 'lucide-react'; 

interface IAccordion {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full items-center justify-between py-5 text-left text-lg font-medium transition-all">
        {title}
        <ChevronRight className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90': ''}`}/>
      </button>
      {isOpen && <div className="overflow-hidden pb-5 text-base text-muted-foreground">{children}</div>}
    </div>
  );
};

const Accordion = (items: IAccordion[]) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>{item.children}</AccordionItem>
      ))}
    </div>
  );
}

export { Accordion, AccordionItem }