import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="py-10 bg-blue-200 ps-4 text-base text-center">
      <p>Copyright © {currentYear} - All right reserved by Check Diabetics</p>
    </div>
  );
};

export default Footer;
