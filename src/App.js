import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Lifecycle from "./components/Lifecycle";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About color={color} setColor={setColor} />}
          />
          <Route path="/listgroup" element={<ListGroup />} />
          <Route path="/lifecycle" element={<Lifecycle favcolor="yellow" />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <ListGroup /> */}
    </>
  );
}

export default App;
