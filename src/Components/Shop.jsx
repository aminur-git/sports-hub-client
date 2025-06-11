import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router";
import Marquee from "react-fast-marquee";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";

const Shop = () => {
  const products = useLoaderData();

  // ✅ প্রতিটি প্রোডাক্টের জন্য readMore toggle ট্র্যাক করতে state
  const [expandedIndex, setExpandedIndex] = useState(null);

  const truncateText = (text, limit = 200) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar />

      <div className="bg-yellow-100">
        <Marquee>
          <p className="overflow-hidden bg-yellow-100 text-black py-3 px-2 text-lg font-bold tracking-wider">
            🏆 স্পোর্টস হাবে চলছে বিশেষ অফার! এখনই অর্ডার করুন প্রিমিয়াম জার্সি,
            ফুটবল, ব্যাট এবং আরও অনেক পছন্দের স্পোর্টস গিয়ার সেরা দামে।
            খেলাধুলার জগতে এগিয়ে থাকুন Sports Hub-এর সাথে!
          </p>
        </Marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5">
        {products.map((product, index) => {
          return (
            <div key={index} className="relative card bg-base-100 shadow-sm">
              {product.warranty && (
                <div>
                  <p className=" badge  badge-soft badge-primary m-2 absolute bangla text-xs">
                    গ্যারান্টিঃ {product.warranty}
                  </p>
                </div>
              )}

              <figure>
                <img
                  src={product.imageUrl}
                  className="h-36"
                  alt={product.name}
                />
              </figure>

              <div className="card-body max-w-[320px] mx-auto">
                <div className="badge badge-info badge-soft badge-xs">
                  {product?.type}
                </div>
                <h2 className="card-title truncate w-full">{product.name}</h2>
                {product?.brand && (
                  <div className="badge badge-outline badge-secondary">
                    {product.brand}
                  </div>
                )}

                <p className="mt-2 ">
                  {truncateText(product.description)}
                  {product.description?.length > 200 && (
                    <button className="text-blue-600 text-sm font-medium hover:underline pl-2 ">
                      See More{" "}
                    </button>
                  )}
                </p>

                {/* ✅ Toggle Button */}

                <div className="card-actions justify-end flex-wrap gap-1 "></div>
                <div className="flex justify-between  gap-4">
                  <div className="w-full">
                    <button className="btn-wide btn btn-warning text-black bangla">
                    <TiShoppingCart /> {product.price}
                  </button>
                  </div>
                  <div className=" btn  btn-md btn-soft hover:text-white btn-secondary text-pink-500">
                    <FaRegHeart />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
