import React from "react";
import profileImg from "../../src/assets/profile.jpg";

const Navbar = () => {
  const options = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Instructors</a>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-200 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {options}
            </ul>
          </div>
          <a className="btn btn-outline btn-primary normal-case text-xl">
            SummerSportsHub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{options}</ul>
        </div>
        {/* profile picture and dropdown */}
        <div className="navbar-end">
          <img src={profileImg} className="w-20 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
