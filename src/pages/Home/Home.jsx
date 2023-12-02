import Quiz from "./Quiz/Quiz";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <Sidebar />
      </div>
      <div className="lg:col-span-3">
        <Quiz />
      </div>
    </div>
  );
};

export default Home;
