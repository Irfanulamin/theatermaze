import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdInsertLink } from "react-icons/md";

const SingleMovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();
  const id = params.id;
  console.log(params.id);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((allMovies) => {
        const clickedMovie = allMovies.find(
          (movie) => movie.show.id === parseInt(id)
        );
        setMovieDetails(clickedMovie);
      });
  }, []);

  const { show } = movieDetails;
  const notagSummary = show?.summary?.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-7 items-center p-4 md:p-11 lg:p-24">
      <div>
        <img src={show?.image?.original} className="h-96 w-80 object-cover" />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-4xl text-red-700 font-bold">{show?.name}</h2>
          </div>
          <div>
            <a href={show?.url} target="_blank">
              <MdInsertLink className="w-10 h-8 "></MdInsertLink>
            </a>
          </div>
        </div>
        <p className="text-sm text-left py-2">{notagSummary}</p>
        <p className="text-lg font-semibold pb-2">
          Time: <span className="text-red-700">{show?.schedule?.time}</span>
        </p>

        <div className="flex gap-3 items-center flex-grow">
          {show?.schedule?.days.map((day) => (
            <div>
              <p className="text-red-700 border border-red-700 py-1 px-3 inline">
                {day}
              </p>
            </div>
          ))}
        </div>
        <div className="py-7 ">
          <button className="w-full transation_custom py-2 transition_custom border-none hover:text-red-700 hover:bg-transparent  btn btn-sm bg-red-700 text-white rounded-sm">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetails;
