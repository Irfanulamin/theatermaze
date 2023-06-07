import React from "react";
import MovieCard from "./MovieCard";

const MoviesSection = ({ movies }) => {
  return (
    <div className="p-5 md:p-12 lg:p-24 bg-base-100">
      <h2 className="text-2xl lg:text-7xl text-center font-semibold mb-32">
        Movie Section
      </h2>
      <div className="grid grid-cols-1 gap-12  lg:grid-cols-2">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.show?.id}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
