import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4 text-center fw-bold">About KhaLoo</h2>
        <p className="lead text-muted">
          Welcome to <strong>KhaLoo</strong> — your one-stop destination for delicious food delivery. Our goal is to connect you with your favorite local restaurants, with fast and reliable service.
        </p>
        <p>
          Built with the MERN stack, KhaLoo is optimized for speed, security, and scalability. Whether you're ordering lunch at work or dinner at home, we've got you covered!
        </p>
        <p>
          <strong>Technologies Used:</strong>
          <ul>
            <li>MongoDB for database</li>
            <li>Express.js for backend APIs</li>
            <li>React for frontend UI</li>
            <li>Node.js for server logic</li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  );
}
