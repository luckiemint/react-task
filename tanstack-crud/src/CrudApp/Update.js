import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import InputForm from "../components/InputForm";

const Update = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  //fetching data
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => {
        setInputData(res.data);
        console.log("update ran");
      })
      .catch((err) => console.log(err));
  }, []);

  //edit data
  const navigate = useNavigate();
  const handleSubmit = (inputData) => {
    axios
      .put("http://localhost:3030/users/" + id, inputData)
      .then((res) => {
        alert("Record updated successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border p-5 bg-secondary text-white">
        <h1 className="">Update Record</h1>
        <InputForm
          handleSubmit={handleSubmit}
          submitButtonLabel={"Update"}
          inputData={inputData}
          setInputData={setInputData}
        />
      </div>
    </div>
  );
};

export default Update;
