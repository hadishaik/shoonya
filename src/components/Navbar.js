import React, {
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import { MyContext } from "../contextapi/MyContext";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const { setFilteredItems } = useContext(MyContext);
  const debouncedValue = useDeferredValue(inputValue);

  useEffect(() => {
    if (debouncedValue.length > 2) {
      fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=${debouncedValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setFilteredItems(data);
          } else {
            setFilteredItems([]);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [debouncedValue, setFilteredItems]);

  const handleChangeFilterDate = (e) => {
    const value = e.target.value;
    setDateFilter(value);
    try {
      fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter=${value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setFilteredItems(data);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeFilterType = (e) => {
    const value = e.target.value;
    setTypeFilter(value);
    try {
      fetch(
        `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter=${value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setFilteredItems(data);
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="container h-auto md:flex justify-between my-4 md:text-white space-y-3 md:space-y-0">
      <div
        className="w-[92%] md:w-[300px] grid md:grid-cols-2 md:gap-6 mx-auto md:mx-0 space-y-3 md:space-y-0"
        id="dropdowns"
      >
        <select
          className="bg-gray-200 md:bg-darkBlue rounded-sm md:rounded-lg cursor-pointer px-2 h-[42px]"
          value={dateFilter}
          onChange={handleChangeFilterDate}
        >
          <option value={""}> Filter by Date </option>
          <option value={"23"}> 2023 - 2024</option>
          <option value={"24"}>2024 - 2025</option>
        </select>
        <select
          className="bg-gray-200 md:bg-darkBlue rounded-sm md:rounded-lg cursor-pointer px-2 h-[42px]"
          value={typeFilter}
          onChange={handleChangeFilterType}
        >
          <option value={""}>Filter by Type </option>
          <option value={"Yoga"}>Yoga</option>
          <option value={"Meditation"}>Meditation</option>
          <option value={"Detox"}>Detox</option>
        </select>
      </div>
      <div
        className="w-[92%] md:w-[400px] h-[42px] bg-white border-2 md:bg-darkBlue rounded-sm md:rounded-lg mx-auto md:mx-0"
        id=""
      >
        <input
          className="w-full h-full bg-black bg-opacity-0 outline-none px-4 placeholder:text-black md:placeholder:text-white"
          id="seacrh bar"
          value={inputValue}
          placeholder="Search retreats by title"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
