import React from "react";
import MovieCard from "./MovieCard";

const MoviesSection = ({ movies }) => {
  return (
    <div className="p-24">
      <h2 className="text-7xl text-center font-semibold mb-32">
        M<span className="text-red-700">ov</span>ies Sect
        <span className="text-red-700">io</span>n
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
