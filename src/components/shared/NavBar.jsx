import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-yellow-600 px-12 py-7">
      <div className="navbar-start">
        <Link to="/" className="text-4xl font-semibold text-white">
          Theater Maze
        </Link>
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
