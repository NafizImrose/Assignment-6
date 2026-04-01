import React from "react";
import EmptyCart from "../emptyCart/EmptyCart";

const Cart = ({ cartProduct }) => {
  return (
    <div>
      {/* <EmptyCart></EmptyCart> */}
      <div
        className="w-11/12 md:w-8/12 mx-auto  
     rounded-3xl p-20 mt-10 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
        {cartProduct.map((product) => {
          return (
            <div className="bg-[#F9FAFC] rounded-2xl flex justify-between mb-5 p-5">
              <div className="flex gap-5">
                <div
                  className="w-12 h-12 
                rounded-full bg-gray-200 flex justify-center items-center "
                >
                  <div>{product.icon}</div>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">{product.name}</h1>
                  <p>${product.price}</p>
                </div>
              </div>
              <div>
                <button className="btn border-none text-red-600">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
