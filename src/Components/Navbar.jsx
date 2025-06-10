import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {

    const links = <>
    
    <NavLink className={'px-3'} to={'/'}>হোম</NavLink>
    <NavLink to={"/shop"}>কেনাকাটা</NavLink>
    <NavLink to={'/blog'}>ব্লগ</NavLink>
    <NavLink to={'/pages'}>আমাদের সম্পর্কে</NavLink>
    
    </>


  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
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
          <a className="btn btn-ghost text-xl">Sports<span className="text-yellow-400">Hub</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-10 text-lg">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
