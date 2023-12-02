import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Home/Sidebar/Sidebar";

const QuizRoot = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default QuizRoot;
