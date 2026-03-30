import React from "react";
import accountImg from "../../assets/products/user.png";
import product from "../../assets/products/package.png";
import rocket from "../../assets/products/rocket.png";

const Steps = () => {
  return (
    <div className="text-center bg-[#F9FAFC] p-10 md:px-52 md:py-24 space-y-10">
      <h1 className="text-3xl md:text-5xl font-bold">Get Started in 3 Steps</h1>
      <p className="text-[#627382]">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="flex flex-col gap-10 md:flex-row justify-around ">
        <div
          className="bg-[#FFFFFF] flex justify-center items-center
         flex-col rounded-2xl space-y-4 px-6 pb-16 pt-10 shadow-sm relative"
        >
          <div
            className="bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA] text-white text-sm 
           rounded-full p-1 w-7 h-7  top-3 right-3 absolute"
          >
            <h1>01</h1>
          </div>
          <div
            className="w-20 h-20 rounded-full bg-[#4F39F6]/20 flex 
          justify-center items-center"
          >
            <img src={accountImg} alt="" />
          </div>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p>
            Sign up for free in seconds. No credit card <br /> required to get
            started.
          </p>
        </div>

        <div
          className="bg-[#FFFFFF] flex justify-center items-center
         flex-col rounded-2xl space-y-4 px-6 pb-16 pt-10 shadow-sm relative"
        >
          <div
            className="bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA] text-white text-sm 
           rounded-full p-1 w-7 h-7 top-3 right-3 absolute"
          >
            <h1>02</h1>
          </div>
          <div
            className="w-20 h-20 rounded-full bg-[#4F39F6]/20 flex 
          justify-center items-center"
          >
            <img src={product} alt="" />
          </div>
          <h1 className="text-2xl font-bold">Choose Products</h1>
          <p>
            Browse our catalog and select the tools <br />
            that fit your needs.
          </p>
        </div>

        <div
          className="bg-[#FFFFFF] flex justify-center items-center
         flex-col rounded-2xl space-y-4 px-6 pb-16 pt-10 shadow-sm relative"
        >
          <div
            className="bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA] text-white text-sm 
           rounded-full p-1 w-7 h-7 top-3 right-3 absolute"
          >
            <h1>03</h1>
          </div>
          <div
            className="w-20 h-20 rounded-full bg-[#4F39F6]/20 flex 
          justify-center items-center"
          >
            <img src={rocket} alt="" />
          </div>
          <h1 className="text-2xl font-bold">Start Creating</h1>
          <p>
            Download and start using your premium <br /> tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
