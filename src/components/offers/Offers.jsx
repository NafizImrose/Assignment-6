import Products from "../products/Products";
import Cart from "../cart/Cart";
import React, { use, useState } from "react";

const Offers = ({
  dataPromise,
  count,
  setCount,
  cartProduct,
  setCartProduct,
}) => {
  const data = use(dataPromise);
  const [toggleType, setToggleType] = useState("Product");

  return (
    <div className="py-20">
      <h1 className="text-5xl font-bold text-center">Premium Digital Tools</h1>
      <p className="text-center mt-3">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <div className="flex justify-center mt-4 border border-gray-100 shadow-2xl w-fit mx-auto rounded-full">
        <button
          onClick={() => setToggleType("Product")}
          className={`btn rounded-full shadow-2xl ${
            toggleType === "Product"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-white border-r-0 rounded-r-none"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setToggleType("Cart")}
          className={`btn rounded-full shadow-2xl  ${
            toggleType === "Cart"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-white border-l-0 rounded-l-none"
          }`}
        >
          Cart ({count})
        </button>
      </div>
      {toggleType === "Product" ? (
        <Products
          data={data}
          count={count}
          setCount={setCount}
          setCartProduct={setCartProduct}
          cartProduct={cartProduct}
        ></Products>
      ) : (
        <Cart data={data} cartProduct={cartProduct} count={count}></Cart>
      )}
    </div>
  );
};

export default Offers;
