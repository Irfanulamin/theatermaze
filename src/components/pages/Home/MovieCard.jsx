import React from "react";

const MovieCard = ({ movie }) => {
  const { show } = movie;
  return (
    <div className="bg-white border flex ">
      <img src={show?.image?.original} alt="Movie" className="w-52 h-64" />
      <div className="p-12">
        <h2 className="text-2xl font-semibold text-right tracking-wide">
          {show?.name}
        </h2>
      </div>
    </div>
  );
};

export default MovieCard;
