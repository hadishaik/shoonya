import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full h-auto -shadow-sm mt-7"
      style={{ boxShadow: "0 -1px 2px 0 rgb(0 0 0 / 0.05)" }}
    >
      <header className="container">
        <h2 className="text-center text-lg md:text-xl py-5">
          <span className="text-base">© </span> 2024 Wellness Retreats. All
          rights reserved.
        </h2>
      </header>
    </div>
  );
};

export default Footer;
