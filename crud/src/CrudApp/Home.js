import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete this record?");
    if (confirm) {
      axios
        .delete("http://localhost:3030/users/" + id)
        .then((res) => {
          alert("Record Deleted!");
          navigate("/");
          fetchData();
          // window.location.reload(true);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container mt-5">
      <h1>CRUD App with Axios Json-Server</h1>
      <Link to="/create" className="btn btn-primary btn-lg my-5">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  to={`/update/${d.id}`}
                  className="btn btn-sm btn-success mx-2"
                >
                  Update
                </Link>
                <button
                  className="btn btn-sm btn-danger mx-2"
                  onClick={(e) => handleDelete(d.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/read/${d.id}`}
                  className="btn btn-sm btn-outline-primary mx-2"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
