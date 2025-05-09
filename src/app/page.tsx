import React from "react";
import ServiceList from "./features/Services/ServiceList";
import RecentWorks from "./features/RecentWorks/RecentWorks";
import { FeaturedInsights } from "./features/Features/FeaturedInsights";
import Hero from "./features/Hero/Hero";
import { Footer } from "./features/Footer/Footer";
import ProductList from "./features/Products/ProductList";
const Home = () => {
  return (
    <>
      <Hero />
      <ProductList />
      <ServiceList />
      <RecentWorks />
      <FeaturedInsights />
      <Footer />
    </>
  );
};

export default Home;
