import React from "react";
import { Link } from "react-router-dom";

const QuestionEleven = () => {
  return (
    <div className="container">
      <h2 className="text-lg xl:text-xl text-slate-200 font-semibold mb-4">
        Feel too weak & restless?
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

      {/* Prev button */}
      <div className="mt-4">
        <Link to={"/question-ten"}>
          <button className="bg-blue-600 px-3 py-1 text-sm rounded-sm">
            Prev
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuestionEleven;
