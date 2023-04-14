import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LocalStorage from "./LocalStorage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    <LocalStorage /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ls" element={<LocalStorage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
