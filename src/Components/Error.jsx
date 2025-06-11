import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="max-w-11/12 mx-auto space-y-10 p-10">
        <div className="space-y-5 w-full flex flex-col justify-center text-center">
          <h1 className="text-5xl md:text-8xl font-black line-through">
            Sports <span className="text-amber-500">Hub</span>
          </h1>
          <p className="text-red-700 font-semibold  md:text-2xl">You've discovered a page that doesn't exist.</p>
          <img src="/6YZJ.gif" className="max-h-[600px] w-auto" alt="" />
        </div>
        <div className="text-center">
            <Link to={'/'} className="btn btn-outline ">Go Back</Link>
        </div>
    </div>
  );
};

export default Error;
