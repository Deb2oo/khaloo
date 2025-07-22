import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import About from "./screen/About";
import Contact from "./screen/Contact";
import PrivacyPolicy from "./screen/PrivacyPolicy";

import Home from "./screen/Home";
import Login from "./screen/Login";
import Signup from "./screen/Signup.js";
import { CartProvider } from "./components/ContexReduser.js";
import MyOrder from "./screen/MyOrder.js";
import Layout from "./components/Layout.js";
import ScrollToTop from "./components/ScrollToTop.js"

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<Signup />} />
            <Route path="/myOrder" element={<MyOrder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
