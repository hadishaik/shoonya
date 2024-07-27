import React, { useContext, useEffect, useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";
import Pagination from "./Pagination";
import { MyContext } from "../contextapi/MyContext";

const MasterComponent = () => {
  const { items, setItems, pageNo, setPageNo } = useContext(MyContext);
  const handleNext = () => {
    setPageNo(pageNo + 1);
    const page = pageNo + 1;
    fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((data) => setItems(items.concat(data)))
      .catch((err) => console.log(err));
  };
  const handlePrev = () => {
    setPageNo(pageNo - 1);
    const page = pageNo - 1;
    fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((data) => setItems(items.concat(data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=6`
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <Header />
      <Hero />
      <Navbar />
      <Cards />
      <Pagination handleNext={handleNext} handlePrev={handlePrev} />
      <Footer />
    </div>
  );
};

export default MasterComponent;
