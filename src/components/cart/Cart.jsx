import EmptyCart from "../emptyCart/EmptyCart";
import NonEmptyCart from "../nonEmptyCart/NonEmptyCart";

const Cart = ({ cartProduct, count, setCount, removeItem }) => {
  return count === 0 ? (
    <EmptyCart></EmptyCart>
  ) : (
    <NonEmptyCart
      cartProduct={cartProduct}
      removeItem={removeItem}
      count={count}
      setCount={setCount}
    ></NonEmptyCart>
  );
};

export default Cart;
