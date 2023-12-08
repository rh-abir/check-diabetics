import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-4 bg-blue-200 ps-4 text-2xl">
      <Link to="/">Check Diabetics</Link>
    </div>
  );
};

export default Header;
