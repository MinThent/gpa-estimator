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
  setTotalCredits,
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
      <GradeInput
        text="Total Credits"
        value={totalCredits}
        setValue={setTotalCredits}
      />
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