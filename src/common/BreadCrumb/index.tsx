import React from "react";

interface IBreadcrumb {
  items: { label: string; href?: string }[];
}

export const Breadcrumb = ({ items }: IBreadcrumb) => {
  return (
    <nav className="text-gray-700" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <a href={item.href} className="text-blue-600 hover:text-blue-800">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
