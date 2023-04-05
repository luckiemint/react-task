import React, { useState } from "react";
import { InputForm } from "../components/InputForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (inputData) => {
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
        <InputForm
          handleSubmit={handleSubmit}
          submitButtonLabel={"Create"}
          inputData={inputData}
          setInputData={setInputData}
        />
      </div>
    </div>
  );
};

export default Create;
