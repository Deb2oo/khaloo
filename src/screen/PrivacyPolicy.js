import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <div className="container py-5">
        <h2 className="mb-4 text-center fw-bold">Privacy Policy</h2>

        <p className="text-muted">
          At <strong>KhaLoo</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This policy outlines how we collect, use, and safeguard your data.
        </p>

        <h5 className="mt-4">1. Information We Collect</h5>
        <ul>
          <li>Name, email address, phone number, and address when creating an account or placing an order.</li>
          <li>Usage data including pages visited, time spent, and technical device information.</li>
        </ul>

        <h5 className="mt-4">2. How We Use Your Information</h5>
        <ul>
          <li>To process and deliver your food orders efficiently.</li>
          <li>To personalize your user experience and show relevant offers.</li>
          <li>To improve our website, services, and customer support.</li>
        </ul>

        <h5 className="mt-4">3. Data Security</h5>
        <p>
          We use secure servers and data encryption to protect your information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h5 className="mt-4">4. Third-Party Services</h5>
        <p>
          We may use third-party services for payments, analytics, or communication. These services are governed by their own privacy policies.
        </p>

        <h5 className="mt-4">5. Changes to This Policy</h5>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page.
        </p>

        <h5 className="mt-4">6. Contact Us</h5>
        <p>
          If you have any questions or concerns, please contact us at <strong>privacy@khaloo.com</strong>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
