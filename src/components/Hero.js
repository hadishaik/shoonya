import React from "react";

const Hero = () => {
  return (
    <div className="container h-[60svh] bg-lightBrown py-[15px] px-[20px] my-6 rounded-lg hidden md:block">
      <img
        src="/brahmacharya.png"
        alt="Hero-img"
        className="w-full h-[70%] rounded-lg object-center"
      />
      <div className="py-5">
        <h2 className="text-xl font-normal pb-2">Discover Your Inner Peace </h2>
        <span>
          Join us for a series of wellness retreats designs to help you find
          tranquility and rejuvenation.
        </span>
      </div>
    </div>
  );
};

export default Hero;
