import React from "react";

interface ISideBar {
  links: { label: string; href: string }[];
}

export const SideBar = ({ links }: ISideBar) => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white fixed">
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-700">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
