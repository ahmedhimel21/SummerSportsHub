import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/Authproviders";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const options = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "text-purple-500" : "")}
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          <a>Dashboard</a>
        </li>
      )}
    </>
  );
  console.log(user);
  return (
    <>
      <div className="navbar bg-base-200 shadow-md px-20 py-4">
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
          <Link
            to="/"
            className="btn btn-outline btn-primary normal-case text-xl"
          >
            SummerSportsHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{options}</ul>
        </div>
        {/* profile picture and dropdown */}
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} title={user?.displayName} />
                </div>
              </div>
              <div className="ml-5">
                <button onClick={handleSignOut} className="btn">
                  LogOut
                </button>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn">
              LogIn
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
