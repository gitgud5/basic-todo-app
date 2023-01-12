import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center  p-4 bg-white">
      <div className="w-auto lg:w-1/5 lg:text-center">
        <Link className="text-xl font-semibold text-gray-800 font-heading" to={'/'}>
          Umar Bro Sans
        </Link>
      </div>
      <div className="w-auto navbar-menu">
        <Link
          to={"/"}
          className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
        >
          Home
        </Link>
        <Link
          className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          to={"/todo"}
        >
          The todo List
        </Link>
      </div>
    </nav>
  );
}
