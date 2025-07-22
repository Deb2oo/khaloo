import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/ContexReduser";
import Cart from "../screen/Cart";
import Model from "../Model";

export default function Navbar() {
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);
  const cart = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1e1e1e" }}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand fs-2 fw-bold text-success fst-italic" to="/">
          KhaLoo
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/">Home</Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link text-white fs-5" to="/myorder">My Orders</Link>
              </li>
            )}
          </ul>

          <div className="d-flex align-items-center">
            {!localStorage.getItem("authToken") ? (
              <>
                <Link className="btn btn-outline-success me-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-outline-light" to="/createuser">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-warning me-3 position-relative"
                  onClick={() => setCartView(true)}
                >
                  My Cart
                  <Badge pill bg="danger" className="ms-2">
                    {cart.length}
                  </Badge>
                </button>
                {cartView && <Model onClose={() => setCartView(false)}><Cart /></Model>}

                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
