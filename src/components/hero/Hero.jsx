import React from "react";
import dotImg from "../../assets/products/Group 5.png";
import play from "../../assets/products/Play.png";
import banner from "../../assets/products/banner.png";

const Hero = () => {
  return (
    <div
      className="w-11/12 mx-auto py-10 flex flex-col gap-7 md:flex-row 
    justify-around items-center md:p-30"
    >
      <div className="left-part">
        <div
          className="bg-[#4F39F6]/20 flex items-center 
         gap-2 rounded-full px-2 py-1 w-fit"
        >
          <div>
            <img src={dotImg} alt="" />
          </div>
          <p className="text-[#4F39F6] text-sm">
            New: AI-Powered Tools Available
          </p>
        </div>

        <div className="space-y-4 mt-3">
          <h1 className=" text-5xl md:text-7xl font-bold ">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            <br />
            software—all in one place. Start creating faster <br />
            Explore Products
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            className="btn text-white bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA] rounded-full"
          >
            Explore Products
          </button>
          <button className="btn rounded-full text-[#4F39F6] border-[#4F39F6]">
            <img src={play} alt="" /> Watch Demo
          </button>
        </div>
      </div>

      <div className="right-part ">
        <img src={banner} alt="" className="w-full max-w-md md:max-w-lg" />
      </div>
    </div>
  );
};

export default Hero;
