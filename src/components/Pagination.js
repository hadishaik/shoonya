import React from "react";

const Pagination = ({ handleNext, handlePrev }) => {
  return (
    <div className="container w-full my-4">
      <div className="w-[200px] mx-auto space-x-3 h-[48px] flex items-center text-white text-lg">
        <div
          className="w-[120px] h-full bg-darkBlue rounded-lg flex items-center justify-center cursor-pointer"
          //   onClick={handlePrev}
        >
          Previous
        </div>
        <div
          className="w-[80px] h-full bg-darkBlue rounded-lg flex items-center justify-center cursor-pointer"
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
