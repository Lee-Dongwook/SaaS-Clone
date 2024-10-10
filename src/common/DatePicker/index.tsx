import React, { useState } from "react";

interface IDatePicker {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

export const DatePicker = ({ selectedDate, onChange }: IDatePicker) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={selectedDate.toLocaleDateString()}
        readOnly
        onClick={() => setShowPicker(!showPicker)}
        className="cursor-pointer"
      />
      {showPicker && (
        <div>
          <button
            onClick={() => {
              onChange(new Date());
              setShowPicker(false);
            }}
          >
            Select Today
          </button>
        </div>
      )}
    </div>
  );
};
