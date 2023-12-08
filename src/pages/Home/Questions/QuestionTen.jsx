import { Link } from "react-router-dom";

const QuestionTen = () => {
  return (
    <div className="container">
      <h2 className="text-lg xl:text-xl text-slate-200 font-semibold mb-4">
        Excessive hunger & slow healing of cuts and sores?
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
          <label htmlFor="male" className="cursor-pointer text-slate-300">
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
          <label htmlFor="female" className="cursor-pointer text-slate-300">
            No
          </label>
        </div>
      </div>

      {/* Next and Prev button */}
      <div className="flex gap-2 mt-4 items-center">
        <Link to={"/question-nine"}>
          <button className="bg-blue-600 px-3 py-1 text-sm rounded-sm">
            Prev
          </button>
        </Link>
        <Link to={"/question-eleven"}>
          <button className="bg-green-600 px-3 py-1 text-sm rounded-sm">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuestionTen;
