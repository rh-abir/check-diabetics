import React, { useEffect } from "react";
import data from "../../../database/data";

const Questions = () => {
  const question = data[0];
  useEffect(() => {
    console.log(data);
  }, []);

  console.log(question);

  // Next and Prev buttons handelr
  const onPrev = () => {
    console.log("onPrev button clicked");
  };
  const onNext = () => {
    console.log("onNext button clicked");
  };

  return (
    <div className="container">
      {/* Questions */}
      <h2 className="text-lg xl:text-xl text-slate-200 font-semibold mb-4">
        {question.question}
      </h2>
      <ul key={question.id} className="flex flex-col space-y-1">
        {question.options.map((option, index) => (
          <li key={index} className="flex items-center gap-2">
            <input
              type="radio"
              className="cursor-pointer"
              name="option"
              id={`option${index}`}
            />
            <label
              for={`option${index}`}
              className="cursor-pointer text-slate-300 text-sm"
            >
              {option}
            </label>
          </li>
        ))}
      </ul>

      {/* Next and Prev button */}
      <div className="flex gap-2 mt-4 items-center">
        <button
          onClick={onPrev}
          className="bg-blue-600 px-3 py-1 text-sm rounded-sm"
        >
          Prev
        </button>

        <button
          onClick={onNext}
          className="bg-green-600 px-3 py-1 text-sm rounded-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Questions;
