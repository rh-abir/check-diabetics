import { useState } from "react";
import { Link } from "react-router-dom";

const QuizHome = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = async () => {
    console.log(inputValue);
    const userName = { inputValue };
    const data = await fetch("http://localhost:5000/api/create-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userName),
    });
    const res = await data.json();
    console.log(res);
  };

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
          onKeyUp={(e) => setInputValue(e.target.value)}
        />
      </form>
      <div className="flex justify-center items-center pt-4">
        <Link
          className={`px-4 py-1 border-0 rounded-md text-lg text-slate-200   duration-100 mb-2  ${
            inputValue.length < 1 ? `bg-blue-200 text-slate-700` : `bg-blue-600`
          }`}
          to={"/gender"}
        >
          <button onClick={handleClick} disabled={inputValue.length < 1}>
            Start Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizHome;
