import React from "react";
import { Link } from "react-router-dom";

const QuestionOne = () => {
  return (
    <div className="container">
      <h2 className="text-xl lg:text-2xl text-slate-200 font-semibold mb-4">Gender?*</h2>
      <div className="flex flex-col space-y-1">
        {/* option one */}
        <div className="flex items-center gap-2">
          <input type="radio" className="cursor-pointer" name="quiz1-option" id="male" />
          <label for="male" className="cursor-pointer text-slate-300">
            Male
          </label>
        </div>

        {/* option two */}
        <div className="flex items-center gap-2">
          <input type="radio" className="cursor-pointer" name="quiz1-option" id="female" />
          <label for="female" className="cursor-pointer text-slate-300">
            Female
          </label>
        </div>

        {/* option three */}
        <div className="flex items-center gap-2">
          <input type="radio" className="cursor-pointer" name="quiz1-option" id="others" />
          <label for="others" className="cursor-pointer text-slate-300">
            Others
          </label>
        </div>
      </div>

      {/* Next button */}
      <div className="mt-4">
        <Link to={"/question-two"}>
          <button className="bg-green-600 justify-self-end px-3 py-1 text-sm rounded-sm">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuestionOne;
