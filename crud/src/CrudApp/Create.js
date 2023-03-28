import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3030/users", inputData)
      .then((res) => {
        alert("Record posted successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border p-5 bg-secondary text-white">
        <h1 className="">Create Record</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="number"
              name="id"
              className="form-control"
              disabled
              hidden
            />
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-info mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
