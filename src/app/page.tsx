import React from "react";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import ServiceList from "./components/ServiceList";
import RecentWorks from "./components/RecentWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductList />
      <ServiceList />
      <RecentWorks />
    </>
  );
};

export default Home;
