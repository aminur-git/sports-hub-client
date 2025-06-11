import React from "react";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";
const Home = () => {
  return (
    <div className="relative min-h-dvh ">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/allPlayers.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(0.4)",
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 text-white max-w-11/12 mx-auto">
        <div className="">
          <Navbar />
        </div>
        <div className="mt-[10%]">
          <div className="space-y-8">
            <h1 className="text-xl md:text-5xl">
              🏆 স্পোর্টস প্রেমীদের জন্য একমাত্র গন্তব্য!
            </h1>
            <p className="max-w-2xl text-base md:text-2xl ">
              খেলাধুলার আসল আনন্দ পেতে হলে দরকার সঠিক গিয়ার। স্পোর্টস জোন এ আপনি
              পাবেন সব ধরনের স্পোর্টস আইটেম, যা আপনার পারফরম্যান্সকে করবে আরও
              উন্নত এবং মজাদার। উচ্চমানের ক্রীড়াসামগ্রী, দ্রুত ডেলিভারি এবং
              এক্সপার্ট সাপোর্টের মাধ্যমে আমরা নিশ্চিত করি, আপনার খেলার যাত্রা
              হয় আরও স্মরণীয়।
            </p>
            <Link to={'shop'} className="flex gap-2 items-center btn btn-circle btn-wide hover:bg-amber-400 border-none">
              {" "}
              <p>এখনি কিনুন</p> <BsArrowRight className="font-bold" />
            </Link >
            <nav className="">
              <div className="flex gap-2">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
