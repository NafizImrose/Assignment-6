import EmptyCart from "../emptyCart/EmptyCart";
import NonEmptyCart from "../nonEmptyCart/NonEmptyCart";

const Cart = ({ cartProduct, count, setCount, removeItem, setCartProduct }) => {
  return count === 0 ? (
    <EmptyCart></EmptyCart>
  ) : (
    <NonEmptyCart
      cartProduct={cartProduct}
      removeItem={removeItem}
      count={count}
      setCount={setCount}
      setCartProduct={setCartProduct}
    ></NonEmptyCart>
  );
};

export default Cart;
