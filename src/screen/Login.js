import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function Login() {
  const [credential, setCredential] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${baseUrl}/api/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("userEmail", credential.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    } else {
      alert("Login failed: " + json.message);
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center vh-100 animate__animated animate__fadeIn"
        style={{
          backgroundColor: "#121212",
          color: "#e0e0e0",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <div
          className="p-4 rounded shadow"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h2 className="text-center mb-4 text-light">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label text-light">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-dark text-light border-secondary"
                name="email"
                value={credential.email}
                onChange={handleChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-light">
                Password
              </label>
              <input
                type="password"
                className="form-control bg-dark text-light border-secondary"
                name="password"
                value={credential.password}
                onChange={handleChange}
                id="exampleInputPassword1"
                required
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success">
                Login
              </button>
              <Link to="/createuser" className="btn btn-outline-light">
                Don't have an account? Signup
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
