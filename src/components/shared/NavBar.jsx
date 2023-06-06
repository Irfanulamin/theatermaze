import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-yellow-600 px-12 py-7">
      <div className="navbar-start">
        <a className="text-2xl font-semibold">Theater Maze</a>
      </div>

      <div className="navbar-end">
        <a className="btn hover:bg-transparent hover:text-white btn-sm rounded-none">
          Booked Movies
        </a>
      </div>
    </div>
  );
};

export default NavBar;
