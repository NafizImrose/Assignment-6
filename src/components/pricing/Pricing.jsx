import React from "react";
import check from "../../assets/products/Check.png";

const Pricing = () => {
  return (
    <div className="text-center  p-10 md:px-52 md:py-24 space-y-10">
      <h1 className="text-3xl md:text-5xl font-bold">
        Simple, Transparent Pricing
      </h1>
      <p className="text-[#627382]">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="flex flex-col md:flex-row md:justify-around lg:justify-center gap-5 ">
        <div className="bg-[#F9FAFC] p-6 text-left md:w-2/10 shadow-md rounded-2xl">
          <h1 className="text-2xl font-bold">Starter</h1>
          <p className="text-[#627382]">Perfect for getting started</p>
          <p className="text-[#627382] mt-6">
            <span className="text-black text-3xl font-bold">$0</span>/Month
          </p>
          <ul className="list-none mt-6">
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> Access to 10 free tools
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> Basic templates
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" />
              Community support
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> 1 project per month
            </li>
          </ul>
          <button
            className="btn rounded-full w-full mt-15 text-white bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA]"
          >
            Get Started Free
          </button>
        </div>

        <div
          className=" p-6 text-left md:w-2/10 shadow-md 
        rounded-2xl text-white bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA] relative"
        >
          <div className="rounded-full px-3 py-1 bg-[#FEF3C6] absolute left-1/2 -top-3 -translate-x-1/2">
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

        <div className="bg-[#F9FAFC] p-6 text-left md:w-2/10 shadow-md rounded-2xl">
          <h1 className="text-2xl font-bold">Enterprise</h1>
          <p className="text-[#627382]">For teams and businesses</p>
          <p className="text-[#627382] mt-6">
            <span className="text-black text-3xl font-bold">$99</span>/Month
          </p>
          <ul className="list-none mt-6">
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> Everything in Pro
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> Team collaboration
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" />
              Custom integrations
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> Dedicated support
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> SLA guarantee
            </li>
            <li className="flex gap-2 text-sm">
              <img src={check} alt="" /> Custom branding
            </li>
          </ul>
          <button
            className="btn rounded-full w-full mt-5 text-white bg-gradient-to-r
           from-[#4F39F6] to-[#9514FA]"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
