import React from "react";
import { useCart, useCartDispatch } from "../components/ContexReduser";
import trash from "../assets/trash.svg";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Cart() {
  const data = useCart();
  const dispatch = useCartDispatch();

  if (data.length === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="fs-3 text-muted animate__animated animate__fadeIn">🛒 Your Cart is Empty</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch(`${baseUrl}/api/orderData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price * food.qty, 0);

  const handleRemove = (id) => {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      dispatch({ type: "REMOVE", index });
    }
  };

  return (
    <div className="container mt-5 animate__animated animate__fadeInUp" style={{ color: "#e0e0e0" }}>
      <div className="table-responsive rounded shadow-lg p-3" style={{ background: "rgba(33, 33, 33, 0.9)", backdropFilter: "blur(10px)" }}>
        <table className="table table-dark table-hover align-middle mb-0">
          <thead className="text-success fs-5 border-bottom border-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col" className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={`${food.id}-${index}`} className="border-bottom border-secondary">
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>₹{food.price * food.qty}/-</td>
                <td className="text-center">
                  <button className="btn btn-sm" onClick={() => handleRemove(food.id)}>
                    <img
                      src={trash}
                      alt="delete"
                      style={{
                        width: "20px",
                        cursor: "pointer",
                        transition: "transform 0.2s ease-in-out",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center mt-4 px-3">
          <h4 className="fw-bold text-light">Total Price: ₹{totalPrice}/-</h4>
          <button className="btn btn-success px-4 py-2 shadow" onClick={handleCheckOut}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
