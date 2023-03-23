import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div>
      <div className="App-header ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/listgroup">ListGroup</Link>
        <Link to="/lifecycle">Lifecycle</Link>
      </div>
      <button style={{ right: 0 }} type="button" onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};

export default Header;
