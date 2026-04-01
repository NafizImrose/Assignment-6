import React from "react";
import emptyCard from "../../assets/products/empty-card.png";

const EmptyCart = () => {
  return (
    <div
      className="w-11/12 md:w-8/12 mx-auto  
   flex flex-col items-center justify-center rounded-3xl p-5 md:p-20 mt-10 shadow-2xl"
    >
      <div className="w-40 h-40 ">
        <img className="bg" src={emptyCard} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center">Your cart is empty!</h1>
      </div>
    </div>
  );
};

export default EmptyCart;
