import React from "react";

const Banner = () => {
  return (
    <div className="hero_section flex justify-center items-center">
      <div>
        <h2 className="text-center text-3xl md:text-5xl lg:text-5xl text-white font-bold">
          Theater Maze
        </h2>
        <p className="text-amber-600 font-semibold text-xs md:text-base lg:text-base px-4">
          "TheaterMaze: Unleash Your Imagination in a World of Spectacular
          Cinematic Delights! <br /> Book Your Tickets Now and Embark on a
          Journey of Unforgettable Movie Experiences!"
        </p>
      </div>
    </div>
  );
};

export default Banner;
