import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-dark text-white py-4 mt-5 position-relative"
      style={{ borderTop: "1px solid #444" }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-3 mb-md-0 d-flex align-items-center">
          <Link
            to="/"
            className="text-decoration-none text-success fw-bold fs-4 me-3"
          >
            KhaLoo
          </Link>
          <span className="text-muted">© 2025 KhaLoo, Inc</span>
        </div>

        <div className="d-flex gap-3">
          <Link to="/about" className="text-light text-decoration-none">
            About
          </Link>
          <Link to="/contact" className="text-light text-decoration-none">
            Contact
          </Link>
          <Link to="/privacy-policy" className="text-light text-decoration-none">
            Privacy
          </Link>
        </div>
      </div>

      <div
        className="position-absolute text-muted"
        style={{
          bottom: "5px",
          right: "10px",
          fontSize: "0.8rem",
          fontFamily: "cursive",
        }}
      >
        Developed & Maintained by Debjyoti Adak
      </div>
    </footer>
  );
}
