import React from "react";
import toast from "react-hot-toast";

const NonEmptyCart = ({
  cartProduct,
  removeItem,
  count,
  setCount,
  setCartProduct,
}) => {
  // calculate total dynamically
  const totalMoney = cartProduct.reduce(
    (acc, product) => acc + product.price,
    0,
  );
  //proceed tp checkout button
  const handleCheckout = () => {
    if (cartProduct.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    // Clear the cart
    setCartProduct([]);
    setCount(0);

    // Show success toast
    toast.success("Checkout successful! Your cart is now empty.");
  };
  return (
    <div>
      <div>
        <div
          className="w-11/12 md:w-8/12 mx-auto  
     rounded-3xl p-5 md:p-20 mt-10 shadow-2xl"
        >
          <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
          {cartProduct.map((product) => {
            return (
              <div>
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
                    <button
                      onClick={() => {
                        removeItem(product.id);
                        setCount(count - 1);
                        toast.success("Product removed from cart!");
                      }}
                      className="btn border-none text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between my-4">
            <p>Total:</p>
            <p className="font-semibold text-xl">${totalMoney}</p>
          </div>
          <div>
            <button
              onClick={handleCheckout}
              className="btn btn-primary w-full rounded-full p-6"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonEmptyCart;
