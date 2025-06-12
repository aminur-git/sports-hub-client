import React, { useContext } from "react";
import { NavLink } from "react-router";
import AuthProviders, { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to={"/"}>হোম</NavLink>
      <NavLink to={"/shop"}>কেনাকাটা</NavLink>
      <NavLink to={"/add-product"}>নতুন প্রোডাক্ট</NavLink>
      <NavLink to={"/blog"}>ব্লগ</NavLink>
      <NavLink to={"/pages"}>আমাদের সম্পর্কে</NavLink>
      <NavLink to={"/Register"}>রেজিস্টার</NavLink>
    </>
  );

  return (
    <div className="py-5">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-yellow-400 rounded-box z-1 mt-3 w-52 p-2   "
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-black md:text-4xl">
            Sports<span className="text-yellow-400 pl-2">Hub</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10 text-xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="  truncate">
            {" "}
            {user ? ( <>
              <div className=" max-w-30 truncate">
                <p className="truncate ">{user.email}</p>
              </div>
              <div className="flex justify-end">
                <button className="btn btn-xs btn-wide btn-neutral">Log Out</button>
              </div></>
            ) : (
              "Login"
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
