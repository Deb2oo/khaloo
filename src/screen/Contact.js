import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

    
    
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4 text-center fw-bold">Contact Us</h2>
        <p className="lead text-muted text-center">
          We'd love to hear from you! Please fill out the form below or reach us through the details provided.
        </p>

        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              style={{ backgroundColor: "#2c2c2c", color: "#fff", border: "none" }}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              style={{ backgroundColor: "#2c2c2c", color: "#fff", border: "none" }}
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              style={{ backgroundColor: "#2c2c2c", color: "#fff", border: "none" }}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100">Send Message</button>
        </form>

        <div className="mt-5 text-center text-muted">
          <p><strong>Email:</strong> support@khaloo.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>
      </div>
      <Footer />
    </div>
    </motion.div>
  );
}
