import EmptyCart from "../emptyCart/EmptyCart";
import NonEmptyCart from "../nonEmptyCart/NonEmptyCart";

const Cart = ({ cartProduct, count }) => {
  return count === 0 ? (
    <EmptyCart></EmptyCart>
  ) : (
    <NonEmptyCart cartProduct={cartProduct}></NonEmptyCart>
  );
};

export default Cart;
