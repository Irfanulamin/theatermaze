import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdInsertLink } from "react-icons/md";

const SingleMovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const params = useParams();
  const id = params.id;
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

  const addToLocalStorage = (event) => {
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const age = form.age.value;
    const userInfo = { name, email, age };
    const exist = JSON.parse(localStorage.getItem("userInfo"));
    if (!exist) {
      const userInfoStrinbgify = JSON.stringify(userInfo);
      localStorage.setItem("userInfo", userInfoStrinbgify);
    } else {
      alert("I already have your User Info 🤔❌");
    }
  };

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form
          onSubmit={addToLocalStorage}
          method="dialog"
          className="modal-box"
        >
          <h3 className="font-bold text-2xl text-black mb-3">
            Book your favorite movie now!
          </h3>
          <h3 className="text-5xl text-red-700 font-bold text-center py-11">
            {show?.name}
          </h3>
          <h3 className="text-xl text-red-700 font-bold">
            <span className="text-black">Language: </span>
            {show?.language}
          </h3>
          <h3 className="text-xl text-red-700 font-bold">
            <span className="text-black">Average Runtime:</span>{" "}
            {show?.averageRuntime}
          </h3>
          <h3 className="text-xl text-red-700 font-bold">
            <span className="text-black">Time:</span>{" "}
            {show?.schedule?.time ? show?.schedule?.time : "Not Available"}
          </h3>
          <div className="flex items-center gap-3 pt-3">
            {show?.genres.map((genre, index) => (
              <div
                className="badge text-red-700 border-red-700 badge-outline"
                key={index}
              >
                {genre}
              </div>
            ))}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered rounded-sm"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered rounded-sm"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="text"
              name="age"
              required
              className="input input-bordered rounded-sm"
            />
          </div>
          <div className="modal-action">
            <input
              className="rounded-sm w-full transation_custom py-2 transition_custom border-none hover:text-red-700 active:text-red-700 hover:bg-transparent  btn btn-sm active:bg-white bg-red-700 text-white "
              type="submit"
              value="Book Now"
            />
          </div>
        </form>
      </dialog>
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
            Time:{" "}
            <span className="text-red-700">
              {show?.schedule?.time ? show?.schedule?.time : "Not Available"}
            </span>
          </p>
          {show?.schedule?.days && (
            <div className="flex gap-3 items-center flex-grow">
              {show?.schedule?.days.map((day) => (
                <div>
                  <p className="text-red-700 border border-red-700 py-1 px-3 inline">
                    {day}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="py-7 ">
            <button
              onClick={() => window.my_modal_5.showModal()}
              className="w-full transation_custom py-2 transition_custom border-none hover:text-red-700 active:text-red-700 hover:bg-transparent  btn btn-sm active:bg-white bg-red-700 text-white rounded-sm"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovieDetails;
