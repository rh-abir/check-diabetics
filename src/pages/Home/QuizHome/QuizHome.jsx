import React from "react";
import { Link } from "react-router-dom";

const QuizHome = () => {
  return (
    <div className="text-lg text-slate-200 bg-slate-900 h-full w-full p-10">
      <ol className="list-decimal">
        <li>Condition One</li>
        <li>Condition Two</li>
        <li>Condition Three</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form className="flex justify-center mt-10">
        <input
          className="px-4 py-2 w-1/2 border-0 outline-none rounded-md text-base text-slate-800"
          type="text"
          placeholder="Username*"
          required
        />
      </form>
      <div className="flex justify-center items-center pt-4">
        <Link
          className="px-4 py-1 border-0 rounded-md text-lg text-slate-200 no-underline bg-blue-600 mb-2"
          to={"/quiz"}
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizHome;
