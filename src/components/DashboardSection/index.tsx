import React from 'react';

interface IDashboardSection {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const DashboardSection = (props: IDashboardSection) => {
  return (
    <div className="rounded-md bg-card p-5">
      <div className="max-w-3xl">
        <div className="text-lg font-semibold">{props.title}</div>
        <div className="mb-4 text-sm font-medium text-muted-foreground">
          {props.description}
        </div>
      </div>
      {props.children}
    </div>
  );
};
