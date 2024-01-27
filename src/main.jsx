import React from "react";
import ReactDOM from "react-dom/client";
import { register } from "swiper/element/bundle";
import App from "./App.jsx";
import "./index.css";

register();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
