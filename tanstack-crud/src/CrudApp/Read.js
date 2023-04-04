import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Read = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3030/users/" + id)
            .then((res) => setData([res.data]))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="container p-5">
            <div className="d-flex">
                <Link to="/" className="btn btn-lg btn-outline-primary mx-5">
                    Back
                </Link>
                <h1>User record</h1>
            </div>

            {data.map((d) => (
                <div className="container my-5 p-5">
                    <p>
                        <b>ID:</b> {d.id}
                    </p>
                    <p>
                        <b>Name:</b> {d.name}
                    </p>
                    <p>
                        <b>Email:</b> {d.email}
                    </p>
                    <p>
                        <b>DOB:</b> {d.dob}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Read;