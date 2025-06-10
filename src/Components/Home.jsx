import React from "react";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";

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
        <div className="">
          <Marquee>
            <p className=" overflow-hidden">
              🔹 ১০০% অথেন্টিক 🔹 সম্পূর্ণ নির্ভরযোগ্য 🔹 ইউনিক কালেকশন – যা
              অন্য কেউ দিতে পারবে না! ⚽ ক্রিকেট, ফুটবল, বাস্কেটবল, ব্যাডমিন্টন,
              ফিটনেস এক্সেসরিজ – সব কিছু এক জায়গায়! 🎯 খাঁটি পণ্য, প্রিমিয়াম
              কোয়ালিটি, প্রতিযোগিতামূলক দাম!
            </p>
          </Marquee>
          <h1 className="text-4xl">
            🏆 স্পোর্টস প্রেমীদের জন্য একমাত্র গন্তব্য!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
