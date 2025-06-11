import React from "react";
import Navbar from "./Navbar";
import { data } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AddProducts = () => {
  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const type = form.type.value;
    const price = form.price.value;
    const warranty = form.warranty.value;
    const brand = form.brand.value;
    const imageUrl = form.imageUrl.value;

    const product = {
      name,
      description,
      type,
      price,
      warranty,
      brand,
      imageUrl,
    };
    console.log(product);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          toast.success('Product Added Successfully')
          form.reset()
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
  };
  return (
    <div className="max-w-11/12 mx-auto ">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div className="space-y-10 mt-10">
          <h1 className="text-2xl font-semibold text-center">
            নতুন প্রোডাক্ট যোগ করুন
          </h1>
          <form
            onSubmit={handleAddProducts}
            className="grid  grid-cols-1 xl:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            <div className="w-full">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                প্রোডাক্ট এর নামঃ *
              </label>

              <input
                type="text"
                required
                name="name"
                placeholder="টেনিস বল"
                className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
              />
            </div>
            <div className="w-full">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                প্রোডাক্ট সম্পর্কেঃ *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="description"
                  placeholder="বিস্তারিত লিখুন"
                  className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                কোন স্পোর্টস এর সাথে সম্পর্কিতঃ *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="type"
                  placeholder="ক্রিকেট/ফুটবল/ভলিবল ইত্যাদি"
                  className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                মুল্যঃ *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  name="price"
                  placeholder="৯৯৯৳"
                  className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                গ্যারান্টি/ওয়ারেন্টিঃ {`(অপশনাল)`}
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="warranty"
                  placeholder="৬ মাস "
                  className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                ব্র্যান্ডঃ {`(অপশনাল)`}
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="brand"
                  placeholder="Kookaburra"
                  className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                />
              </div>
            </div>
            <div className="w-full md:col-span-2">
              <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                {`প্রোডাক্ট এর ছবিঃ (লিংক)  *`}
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="imageUrl"
                  required
                  placeholder="Kookaburra"
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                  title="Must be valid URL"
                  className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 p-2 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 validator "
                />
                <p className="validator-hint">Must be valid URL</p>
              </div>
            </div>
            <div>
              <button type="submit" className="btn">
                এড করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
