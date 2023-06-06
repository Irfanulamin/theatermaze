import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { show } = movie;
  const notagSummary = show?.summary?.replace(/<\/?[^>]+(>|$)/g, "");
  const twentywordsSummary = notagSummary.substring(0, 80);
  return (
    <div className="bg-white border  flex items-center">
      <div>
        <img
          src={show?.image?.original}
          alt="Movie"
          className="w-64 h-72 object-cover"
        />
      </div>
      <div className="p-4 pl-7">
        <h2 className="text-4xl font-semibold  tracking-wide">{show?.name}</h2>
        {show?.rating?.average ? (
          <Rating
            style={{ maxWidth: 150 }}
            readOnly
            value={Math.round(show?.rating?.average / 2)}
          />
        ) : (
          <p className="text-red-700">No Ratings</p>
        )}
        <div className="flex items-center py-2 gap-2">
          {show?.genres.map((genre, index) => (
            <div className="badge badge-outline" key={index}>
              {genre}
            </div>
          ))}
        </div>
        <p className="text-sm">{twentywordsSummary}....</p>
        <Link
          className="btn w-1/2 mt-4  bg-red-700 text-white hover:bg-white hover:text-red-700 transation_custom border-none rounded-sm"
          to={`/movie/${show?.id}`}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
