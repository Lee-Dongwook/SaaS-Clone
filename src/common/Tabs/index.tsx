import { useState } from "react";

interface ITab {
  tabs: string[];
  children: React.ReactNode[];
}

export const Tabs = ({ tabs, children }: ITab) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul className="flex border-b">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`mr-1 ${
              index === activeTab ? "border-l border-t border-r rounded-t" : ""
            }`}
          >
            <a
              href="#"
              className={`inline-block py-2 px-4 ${
                index === activeTab
                  ? "bg-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(index);
              }}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-4">{children[activeTab]}</div>
    </div>
  );
};
