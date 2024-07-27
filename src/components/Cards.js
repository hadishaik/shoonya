import React, { useContext, useMemo } from "react";
import Card from "./Card";
import { MyContext } from "../contextapi/MyContext";

const Cards = () => {
  const { filteredItems, items } = useContext(MyContext);
  const data = filteredItems.length > 0 ? filteredItems : items;
  return (
    <div className="container min-h-[calc(100vh-112px)] max-h-auto grid md:grid-cols-3 2xl:grid-cols-4 gap-[25px] px-[15px] md:px-0">
      {Array.isArray(data) ? (
        data?.map((item, index) => (
          <Card
            key={index}
            item={item}
            styles={"h-[300px] bg-lightBrown p-3 rounded-lg"}
            imgStyles={"w-[95%] h-[47%] md:w-[44%] md:h-[42%] rounded-lg"}
          />
        ))
      ) : (
        <div className="">Not Found </div>
      )}
    </div>
  );
};

export default Cards;
