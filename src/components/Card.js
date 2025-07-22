import React, { useState } from "react";
import { useCartDispatch, useCart } from "../components/ContexReduser";
import { toast } from "react-toastify";

export default function Card({ foodItem: foodItems, options = {}, ImagSrc }) {
  const dispatch = useCartDispatch();
  const cart = useCart();
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);

  const handleAddToCart = async () => {
    const itemId = foodItems._id;
    const itemPrice = options[size];
    const existingItem = cart.find(item => item.id === itemId && item.size === size);

    if (existingItem) {
      dispatch({
        type: "UPDATE",
        id: itemId,
        size,
        qty,
        price: itemPrice
      });
      toast.info("Item quantity updated in cart!");
    } else {
      dispatch({
        type: "ADD",
        id: itemId,
        name: foodItems.name,
        price: itemPrice,
        qty,
        size,
        img: foodItems.img
      });
      toast.success("Item added to cart!");
    }
  };

  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src={foodItems.img}
        className="card-img-top"
        alt={foodItems.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body" style={{ overflow: "auto" }}>
        <h5 className="card-title">{foodItems.name}</h5>
        <div className="d-flex align-items-center flex-wrap">
          <select 
            className="m-2 bg-success rounded" 
            onChange={(e) => setQty(parseInt(e.target.value))}
            value={qty}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select 
            className="m-2 bg-success rounded" 
            onChange={(e) => setSize(e.target.value)}
            value={size}
          >
            {priceOptions.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>

          <div className="d-inline h-100 fs-5">
               ₹{options[size] * qty}/-
          </div>
          <hr className="w-100 my-2" />
          <button 
            className="btn btn-success justify-center mx-2" 
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
