import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function MyOrder() {
  const [orderData, setorderData] = useState(null);

  const fetchMyOrder = async () => {
    const response = await fetch(`${baseUrl}/api/myOrderData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    });

    const result = await response.json();
    setorderData(result);
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#eee" }}>
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">My Orders</h2>
        <div className="row justify-content-center">
          {orderData?.orderData?.order_data?.length > 0 ? (
            orderData.orderData.order_data
              .slice(0)
              .reverse()
              .map((order, orderIndex) => (
                <React.Fragment key={orderIndex}>
                  <div className="col-12 mb-3">
                    <h5 className="text-secondary border-bottom pb-2">Order Date: {order[0]?.Order_date}</h5>
                  </div>

                  {order.map((item, index) => {
                    if (!item.Order_date) {
                      return (
                        <div
                          className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4 animate__animated animate__fadeInUp"
                          key={index}
                        >
                          <div
                            className="card text-white bg-dark shadow"
                            style={{
                              width: "18rem",
                              border: "1px solid #2c2c2c",
                              borderRadius: "1rem",
                            }}
                          >
                            <img
                              src={item.img}
                              className="card-img-top"
                              alt={item.name}
                              style={{
                                height: "160px",
                                objectFit: "cover",
                                borderTopLeftRadius: "1rem",
                                borderTopRightRadius: "1rem",
                              }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <div className="d-flex justify-content-between text-muted small mb-2">
                                <span>Qty: {item.qty}</span>
                                <span>Size: {item.size}</span>
                              </div>
                              <div className="fw-bold fs-6">₹{item.price}/-</div>
                            </div>
                          </div>
                        </div>
                      );
                    } else return null;
                  })}
                </React.Fragment>
              ))
          ) : (
            <div className="text-center mt-5 fs-4 text-muted">No orders found.</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
