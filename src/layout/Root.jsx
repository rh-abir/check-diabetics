import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
