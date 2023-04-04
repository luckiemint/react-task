import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Update = () => {
    const { id } = useParams();
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3030/users/" + id)
            .then((res) => setInputData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
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
                            value={inputData.name}
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
                            value={inputData.email}
                        />
                    </div>
                    <button type="submit" className="btn btn-info mt-3">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;