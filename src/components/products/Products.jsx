import React, { useState } from "react";
import check from "../../assets/products/Check.png";
import toast from "react-hot-toast";

const Products = ({ data, count, setCount, setCartProduct, cartProduct }) => {
  const [cart, setCart] = useState([]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-6 w-11/12 md:w-10/12 lg:w-7/12 mx-auto mt-10"
    >
      {data.map((info) => {
        const click = () => {
          if (cart.includes(info.id)) {
            toast.error("Already added to cart!");
          } else {
            setCart([...cart, info.id]);
            setCount(count + 1);
            setCartProduct(...cartProduct, info);
            toast.success("Product added to cart!");
          }
        };
        return (
          <div key={info.id}>
            <div
              className=" p-6 text-left  shadow-2xl 
              rounded-2xl bg-[#F9FAFC] relative"
            >
              <div
                className="rounded-full px-3 py-1 bg-[#FEF3C6] absolute -right-2 top-3
                 -translate-x-1/2"
              >
                <h1 className="text-[12px] text-[#BB4D00]">{info.tag}</h1>
              </div>
              <div
                className="flex justify-center 
              border-gray-300 items-center w-10 h-10 rounded-full border"
              >
                {info.icon}
              </div>
              <h1 className="text-2xl font-bold mt-5">{info.name}</h1>
              <p className="text-sm mt-2">{info.description}</p>
              <p className=" mt-6">
                <span className=" text-3xl font-bold">${info.price}</span>/Month
              </p>
              <ul className="list-none mt-6">
                {info.features.map((feature) => {
                  return (
                    <li key={feature} className="flex gap-2 text-sm">
                      <img src={check} alt="" /> {feature}
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={() => {
                  click();
                }}
                className={`btn rounded-full w-full
                 mt-5 text-white ${cart.includes(info.id) ? "bg-green-600" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"} `}
              >
                {cart.includes(info.id) ? "Added To Cart" : "Buy Now"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
