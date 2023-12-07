import React from "react";
import { Link } from "react-router-dom";

const QuestionNine = () => {
  return <div className="container">
  <h2 className="text-lg xl:text-xl text-slate-200 font-semibold mb-4">
  Excessive sweating, paleness showing up?
  </h2>
  <div className="flex flex-col space-y-1">
    {/* option one */}
    <div className="flex items-center gap-2">
      <input
        type="radio"
        className="cursor-pointer"
        name="quiz1-option"
        id="male"
      />
      <label for="male" className="cursor-pointer text-slate-300">
        Yes
      </label>
    </div>

    {/* option two */}
    <div className="flex items-center gap-2">
      <input
        type="radio"
        className="cursor-pointer"
        name="quiz1-option"
        id="female"
      />
      <label for="female" className="cursor-pointer text-slate-300">
        No
      </label>
    </div>
  </div>

  {/* Next and Prev button */}
  <div className="flex gap-2 mt-4 items-center">
    <Link to={"/question-eight"}>
      <button className="bg-blue-600 px-3 py-1 text-sm rounded-sm">
        Prev
      </button>
    </Link>
    <Link to={"/question-ten"}>
      <button className="bg-green-600 px-3 py-1 text-sm rounded-sm">
        Next
      </button>
    </Link>
  </div>
</div>;
};
 
export default QuestionNine;
