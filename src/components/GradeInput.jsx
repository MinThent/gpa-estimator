import React from "react";

export default function GradeInput({ text, value, setValue }) {

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Ensure that the value cannot be empty and must be at least 0
    if (newValue === "" || parseInt(newValue, 10) < 0) {
      setValue(0);
    } else {
      setValue(parseInt(newValue, 10));
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
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}