import React from "react";
import Banner from "./Banner";
import MoviesSection from "./MoviesSection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <div>
      <Banner></Banner>
      <MoviesSection movies={movies}></MoviesSection>
    </div>
  );
};

export default Home;
