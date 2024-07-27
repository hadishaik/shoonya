import React from "react";

const Card = ({ item, styles, imgStyles }) => {
  const handleDate = (unixStr) => {
    const date = new Date(unixStr * 1000);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formatDate = date.toLocaleDateString("en-US", options);
    return formatDate;
  };
  return (
    <div className={` ${styles}`}>
      <img
        className={`${imgStyles}`}
        src={item.image}
        alt="card-image"
        loading="lazy"
      />
      <div className="text-sm pt-2">
        <h2 className="font-bold text-[16px] py-2">
          {item.title.length > 36
            ? item.title.slice(0, 36) + "..."
            : item.title}
        </h2>
        <div className="oveflow-hidden h-[40px]">
          <p className="">
            {item.description.length > 100
              ? item.description.slice(0, 100)
              : item.description}
          </p>{" "}
        </div>

        <div className="pt-2 ">
          <p>Date: {handleDate(item.date)}</p>
          <p>Location: {item.location} </p>
          <p>Price:${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
