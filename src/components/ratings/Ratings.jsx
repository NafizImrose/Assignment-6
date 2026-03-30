import React from "react";

const Ratings = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center gap-8 
      md:flex-row md:justify-around bg-gradient-to-r from-[#4F39F6]
     to-[#9514FA] p-16 md:py-16 md:px-72"
    >
      <div className="text-center">
        <h1 className="text-7xl text-white font-bold">50K+</h1>
        <p className="text-[#FFFFFF]/80">Active Users</p>
      </div>
      <div className="border-l-2 border-[#FFFFFF]/80 h-24 mx-4 hidden md:block"></div>
      <div className="h-0.5 bg-white/50 w-24 mx-4 md:hidden"></div>
      <div className="text-center">
        <h1 className="text-7xl text-white font-bold">200+</h1>
        <p className="text-[#FFFFFF]/80">Premium Tools</p>
      </div>
      <div className="border-l-2 border-[#FFFFFF]/80 h-24 mx-4 hidden md:block"></div>
      <div className="h-0.5 bg-white/50 w-24 mx-4 md:hidden"></div>
      <div className="text-center">
        <h1 className="text-7xl text-white font-bold">4.9</h1>
        <p className="text-[#FFFFFF]/80">Rating</p>
      </div>
    </div>
  );
};

export default Ratings;
