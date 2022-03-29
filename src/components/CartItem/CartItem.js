import React from "react";
import useAuth from "../../hooks/useAuth";
import "./CartItem.css";
const CartItem = (props) => {
  const { handleRemoveItem } = useAuth();
  const { img, title, price, id } = props.item;
  return (
    <div className="cart-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h4 className="title">{title}</h4>
        <h5>
          <span className="title">Price:</span> {price}$
        </h5>
        <button onClick={() => handleRemoveItem(id)} className="btn btn-cart">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
