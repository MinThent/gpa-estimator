import React, { useState } from "react";

export default function GradeInput({ text, value, setValue }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Allow empty input for a more natural user experience
    if (newValue === "") {
      setInputValue("");
    } else if (parseInt(newValue, 10) >= 0) {
      setInputValue(parseInt(newValue, 10));
      setValue(parseInt(newValue, 10));
    }
  };

  const handleBlur = () => {
    // If the input is empty on blur, reset it to 0
    if (inputValue === "") {
      setInputValue(0);
      setValue(0);
    }
  };

  return (
    <div className="flex flex-col items-start w-4/5 sm:w-2/5 md:w-2/5 lg:w-2/5">
      <label
        htmlFor="numberInput"
        className="mb-1 font-medium text-slate-100 text-sm"
      >
        {text}
      </label>
      <input
        type="number"
        id={text}
        className="block px-3 py-2 border rounded focus:ring-2 focus:ring-primary w-full transition-all duration-200 peer"
        min="0"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
    </div>
  );
}
