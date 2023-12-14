import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [isTrue, setTrue] = useState(true);

  const [getlatestId, setGetlatestId] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        setGetlatestId(data._id);
      });
  }, []);

  const inputValue = (e) => {
    const value = e.target.value;
    setSelectedGender(value);
    setTrue(false);
  };

  const handleClick = async () => {
    console.log(selectedGender);
    const userName = { selectedGender };
    const data = await fetch(
      `http://localhost:5000/api/gender/${getlatestId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userName),
      }
    );
    const res = await data.json();
    console.log(res);
  };

  return (
    <div className="container">
      <h2 className="text-lg xl:text-xl text-slate-200 font-semibold mb-4">
        Gender?*
      </h2>
      <div className="flex flex-col space-y-1">
        {/* option one */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="cursor-pointer"
            name="quiz1-option"
            id="male"
            value="Male"
            onChange={inputValue}
          />
          <label htmlFor="male" className="cursor-pointer text-slate-300">
            Male
          </label>
        </div>

        {/* option two */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            className="cursor-pointer"
            name="quiz1-option"
            id="female"
            value="Female"
            onChange={inputValue}
          />
          <label htmlFor="female" className="cursor-pointer text-slate-300">
            Female
          </label>
        </div>
      </div>

      {/* Next button */}
      <div className="mt-4">
        <Link
          className={` ${
            isTrue
              ? `bg-green-200 text-slate-700 px-3 py-1 text-sm rounded-sm`
              : `bg-green-600 px-3 py-1 text-sm rounded-sm`
          }`}
          to={"/age"}
        >
          <button disabled={isTrue} onClick={handleClick}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Gender;
