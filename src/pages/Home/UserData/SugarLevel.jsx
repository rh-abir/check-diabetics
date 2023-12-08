import React, { useState } from "react";
import { Link } from "react-router-dom";

const SugarLevel = () => {
  const [isTrue, setTrue] = useState(true);

  const inputValue = (e) => {
    const vlaue = e.target.value;
    console.log(vlaue);
    if (vlaue) {
      setTrue(false);
    }
  };
  return (
    <div className="container">
      <h2 className="text-lg xl:text-xl lg:text-2xl text-slate-200 font-semibold mb-4">
        Your sugar level? ( empty stomach ) in mmol/L*
      </h2>
      <form className="flex justify-start">
        <input
          className="px-4 py-2 w-2/3 md:w-1/2  border-0 outline-none rounded-md text-base text-slate-800"
          type="number"
          placeholder="Sugar Level"
          onKeyUp={inputValue}
        />
      </form>
      {/* Next and Prev button */}
      <div className="flex gap-2 mt-4 items-center">
        <Link to={"/age"}>
          <button className="bg-blue-600 px-3 py-1 text-sm rounded-sm">
            Prev
          </button>
        </Link>
        <Link
          className={`bg-green-600 px-3 py-1 text-sm rounded-sm ${
            isTrue ? `bg-green-200 text-slate-700` : `bg-green-600`
          }`}
          to={"/question-four"}
        >
          <button disabled={isTrue}>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default SugarLevel;
