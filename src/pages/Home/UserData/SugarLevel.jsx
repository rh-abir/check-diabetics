import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SugarLevel = () => {
  const [inputValue, setInputValue] = useState("");

  const [getlatestId, setGetlatestId] = useState();
  const [getGender, setgetGender] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGetlatestId(data._id);
        setgetGender(data?.gender);
      });
  }, []);

  const handleClick = async () => {
    console.log(inputValue);
    const userAge = { inputValue };
    const data = await fetch(`http://localhost:5000/api/suger/${getlatestId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userAge),
    });
    const res = await data.json();
    console.log(res);
  };

  const getNextRoute = () => {
    if (getGender?.length > 0) {
      return getGender.length > 0 ? "/question-five" : "/question-four";
    }
    // Default route if there's no valid gender data
    return "/question-four";
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
          onKeyUp={(e) => setInputValue(e.target.value)}
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
          className={` ${
            inputValue.length < 1
              ? `bg-green-200 text-slate-700 px-3 py-1 text-sm rounded-sm`
              : `bg-green-600 px-3 py-1 text-sm rounded-sm`
          }`}
          to={getNextRoute()}
          // to={"/question-four"}
        >
          <button onClick={handleClick} disabled={inputValue.length < 1}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SugarLevel;
