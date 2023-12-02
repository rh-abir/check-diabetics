import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Home/Sidebar/Sidebar";

const QuizRoot = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-5">
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default QuizRoot;
