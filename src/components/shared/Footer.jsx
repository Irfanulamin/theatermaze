import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 py-24 bg-white text-base-content">
      <div>
        <img src="/logo.jpg" className="h-16 w-16" alt="logo" />
        <p className="font-semibold text-2xl text-black">Theater Maze</p>
      </div>
      <div>
        <span className="text-lg font-bold text-black">Company</span>
        <a className="link link-hover text-black">About us</a>
        <a className="link link-hover text-black">Contact</a>
        <a className="link link-hover text-black">Jobs</a>
      </div>
      <div>
        <span className="text-lg font-bold text-black">Legal</span>
        <a className="link link-hover text-black">Terms of use</a>
        <a className="link link-hover text-black">Privacy policy</a>
        <a className="link link-hover text-black">Cookie policy</a>
      </div>
      <div>
        <span className="text-lg font-bold text-black">Contact us</span>
        <a className="link link-hover text-black">theater@maze.com</a>
        <a className="link link-hover text-black">+123 4567 8910</a>
      </div>
    </footer>
  );
};

export default Footer;
