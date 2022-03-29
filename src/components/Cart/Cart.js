import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { handleClearCart, cart } = useAuth();
  const total = cart.reduce((previous, current) => previous + current.price, 0);
  return (
    <div className="cart container">
      <div className="cart-items">
        <div className="course-cart section">
          <h2 className="title text-center">Courses</h2>
        </div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item}></CartItem>
        ))}
      </div>
      <div className="course-cart section">
        <h2 className="title text-center">Cart</h2>
        <h4>Course Added: {cart.length}</h4>
        <h4>
          Total Price: <span>{total}$</span>
        </h4>
        {cart.length !== 0 && (
          <Link to={`/enrolled/${cart.length}`}>
            <button onClick={handleClearCart} className="btn btn-regular mt-2">
              Place Order
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
