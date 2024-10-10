import React from "react";

interface IToggle {
  enabled: boolean;
  onChange: () => void;
}

export const Toggle = ({ enabled, onChange }: IToggle) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={enabled} onChange={onChange} />
      <span className="slider round"></span>
    </label>
  );
};
