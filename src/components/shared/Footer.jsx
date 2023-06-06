import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 py-24 bg-yellow-600 text-base-content">
      <div>
        <img src="/logo.jpg" className="h-16 w-16" alt="logo" />
        <p className="font-semibold text-2xl text-white">Theater Maze</p>
      </div>
      <div>
        <span className="text-lg font-bold text-white">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </div>
      <div>
        <span className="text-lg font-bold text-white">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="text-lg font-bold text-white">Contact us</span>
        <a className="link link-hover">theater@maze.com</a>
        <a className="link link-hover">+123 4567 8910</a>
      </div>
    </footer>
  );
};

export default Footer;
