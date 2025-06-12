import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user)

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="max-w-2xl mx-auto space-y-5 mt-10 shadow p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">রেজিস্টার করুনঃ</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className="space-y-3 flex flex-col justify-center items-center"
        >
          <div className="">
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                name="email"
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <div>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                minLength="8"
                title="Must be more than 8 characters"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters
            </p>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value={"রেজিস্টার"}
              className="btn btn-neutral btn-wide"
            />
          </div>
          <Link to={'/login'}>একাউন্ট আছে? <span className="link">লগিন করুন</span> </Link>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Register;
