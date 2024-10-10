import React from "react";

interface IForm {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({ children, onSubmit }: IForm) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
