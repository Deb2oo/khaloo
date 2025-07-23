import React from "react";
import { Link, useNavigate } from "react-router-dom";
const baseUrl = process.env.REACT_APP_BACKEND_URL;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 


export default function Signup() {
  const [credential, setCredential] = React.useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleChange = (event) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };
const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${baseUrl}/api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      alert("User created successfully!");
      navigate("/login");
    } else {
      alert("Error creating user: " + json.message);
    }
  };

  return (
    <>
    <Navbar />
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded"
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#1e1e1e",
          boxShadow: "0 0 10px #000",
        }}
      >
        <h2 className="text-center mb-4">Create Your Account</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credential.name}
            onChange={handleChange}
            required
            style={{
              backgroundColor: "#2c2c2c",
              color: "#fff",
              border: "none",
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credential.email}
            onChange={handleChange}
            required
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{
              backgroundColor: "#2c2c2c",
              color: "#fff",
              border: "none",
            }}
          />
          <div id="emailHelp" className="form-text text-muted">
            We'll never share your email.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credential.password}
            onChange={handleChange}
            required
            id="exampleInputPassword1"
            style={{
              backgroundColor: "#2c2c2c",
              color: "#fff",
              border: "none",
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputGeolocation1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={credential.geolocation}
            onChange={handleChange}
            required
            id="exampleInputGeolocation1"
            style={{
              backgroundColor: "#2c2c2c",
              color: "#fff",
              border: "none",
            }}
          />
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-success w-50 me-2">
            Signup
          </button>
          <Link to="/login" className="btn btn-outline-light w-50 ms-2">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
}
