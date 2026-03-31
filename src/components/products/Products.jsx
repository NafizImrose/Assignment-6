import React from "react";
import check from "../../assets/products/Check.png";

const Products = ({ data }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 lg:w-7/12 mx-auto mt-10"
    >
      {data.map((info) => {
        return (
          <div>
            <div
              className=" p-6 text-left  shadow-2xl 
              rounded-2xl bg-[#F9FAFC] relative"
            >
              <div
                className="rounded-full px-3 py-1 bg-[#FEF3C6] absolute -right-7 top-3
                 -translate-x-1/2"
              >
                <h1 className="text-[12px] text-[#BB4D00]">Most Popular</h1>
              </div>
              <h1 className="text-2xl font-bold">Pro</h1>
              <p>Best for professionals</p>
              <p className=" mt-6">
                <span className=" text-3xl font-bold">$29</span>/Month
              </p>
              <ul className="list-none mt-6">
                <li className="flex gap-2 text-sm">
                  <img src={check} alt="" /> Access to all premium tools
                </li>
                <li className="flex gap-2 text-sm">
                  <img src={check} alt="" /> Unlimited templates
                </li>
                <li className="flex gap-2 text-sm">
                  <img src={check} alt="" />
                  Priority support
                </li>
                <li className="flex gap-2 text-sm">
                  <img src={check} alt="" /> Unlimited projects
                </li>
                <li className="flex gap-2 text-sm">
                  <img src={check} alt="" /> Cloud sync
                </li>
                <li className="flex gap-2 text-sm">
                  <img src={check} alt="" /> Advanced analytics
                </li>
              </ul>
              <button className="btn rounded-full w-full mt-5 bg-white text-[#4F39F6]">
                Start Pro Trial
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
