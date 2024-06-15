import { useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

import CartItem from "./CartItem";

import { useDispatch } from "react-redux";
import { clearPrice } from "../utils/PriceSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(clearPrice());
  };
  return (
    <div className="cart">
      <h1>Cart</h1>
      <button className="filter-btn" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="cart-item">
        {cartItems.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <CartItem items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
