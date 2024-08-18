import React from "react";
import GradeInput from "./GradeInput";

export default function GradesWrapper({
  aPlus,
  setAPlus,
  a,
  setA,
  b,
  setB,
  c,
  setC,
  totalCredits,
  estimation,
  calculateEstimation,
}) {
  return (
    <form className="flex flex-col gap-4 mx-auto p-4">
      <GradeInput
        text="Number of A+ Subjects"
        value={aPlus}
        setValue={setAPlus}
      />
      <GradeInput text="Number of A Subjects" value={a} setValue={setA} />
      <GradeInput text="Number of B Subjects" value={b} setValue={setB} />
      <GradeInput text="Number of C Subjects" value={c} setValue={setC} />

      <div className="flex flex-col items-start w-4/5 sm:w-2/5 md:w-2/5 lg:w-2/5">
      <label className="mb-1 font-medium text-amber-50 text-sm">
        Your Total Credits
      </label>
      <input className="block px-3 py-2 border rounded focus:ring-2 focus:ring-primary w-full transition-all duration-200 peer" readOnly placeholder={totalCredits}></input>
      </div>

      <button
        type="button"
        onClick={calculateEstimation}
        className="bg-blue-500 hover:bg-blue-600 mt-4 px-10 py-2 rounded w-2/5 sm:w-1/3 md:w-1/5 lg:w-1/5 text-white"
      >
        Estimate
      </button>
      {estimation !== null && (
        <div className="mt-4 font-semibold text-lg text-slate-50">
          Estimated GPA: {estimation}
        </div>
      )}
    </form>
  );
}
