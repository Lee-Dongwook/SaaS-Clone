import React from "react";

interface IAlert {
  type: "info" | "warning" | "error" | "success";
  message: string;
}

export const Alert = ({ type, message }: IAlert) => {
  const typeColors = {
    info: "blue",
    warning: "yellow",
    error: "red",
    success: "green",
  };

  return (
    <div
      className={`bg-${typeColors[type]}-100 border-t-4 border-${typeColors[type]}-500 rounded-b text-${typeColors[type]}-900 px-4 py-3 shadow-md`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 text-${typeColors[type]}-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 100-20 10 10 0 000 20zm1-4h-2v2h2v-2zm0-4h-2v4h2v-4z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">
            {type === "error"
              ? "Error"
              : type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
