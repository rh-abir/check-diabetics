import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
