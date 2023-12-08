import { Link } from "react-router-dom";

const QuizHome = () => {
  return (
    <div className="container">
      <ol className="list-decimal">
        <li>Condition One</li>
        <li>Condition Two</li>
        <li>Condition Three</li>
        <li>The result will be declared at the end of the test.</li>
      </ol>

      <form className="flex justify-center mt-10">
        <input
          className="px-4 py-2 w-1/2 border-0 outline-none rounded-md text-base text-slate-800"
          type="text"
          placeholder="Enter Your Name"
          required
        />
      </form>
      <div className="flex justify-center items-center pt-4">
        <Link
          className="px-4 py-1 border-0 rounded-md text-lg text-slate-200 bg-blue-600 hover:bg-blue-700 duration-100 mb-2"
          to={"/gender"}
        >
          Start Test
        </Link>
      </div>
    </div>
  );
};

export default QuizHome;
