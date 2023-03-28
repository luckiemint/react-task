import React from "react";
// import {} from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./CrudApp/Create";
import Home from "./CrudApp/Home";
import Read from "./CrudApp/Read";
import Update from "./CrudApp/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
