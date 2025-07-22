import React from "react";
import ReactDOM from "react-dom";

const MODEL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  backgroundColor: "rgb(34,34,34)",
  height: "90%",
  width: "90%",
  overflow: "auto",
  padding: "20px",
  borderRadius: "10px"
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000
};

export default function Model({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODEL_STYLES}>
        <button 
          className="btn btn-danger fs-4" 
          onClick={onClose}
          style={{ position: "absolute", right: "20px", top: "20px" }}
        >
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
