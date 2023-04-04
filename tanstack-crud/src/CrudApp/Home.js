import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
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
        })
        .catch((err) => console.log(err));
    }
  }



  const columns = useMemo(() =>
    [
      columnHelper.accessor((row) => row.name, {
        id: "name",
        cell: (data) => <i>{data.getValue()}</i>,
        header: () => <span>Name</span>,
      }),
      columnHelper.accessor((row) => row.email, {
        id: "email",
        cell: (data) => <i>{data.getValue()}</i>,
        header: () => <span>Email</span>,
      }),
      columnHelper.display({
        id: 'action',
        header: () => <span>Action</span>,
        cell: ({ row }) => (
          <>
            <Link className="btn btn-sm btn-success mx-2" to={`/update/${row.original.id}`}>Update</Link>
            {/* <button className="btn btn-sm btn-danger mx-2" onClick={() => { console.log(row.original.id) }}>Delete</button> */}
            <button className="btn btn-sm btn-danger mx-2" onClick={() => handleDelete(row.original.id)}>Delete</button>
            <Link className="btn btn-sm btn-outline-primary mx-2 " to={`/read/${row.original.id}`}>View Details</Link>
          </>
        )
      })
    ]
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="container mt-5">
      <h1>CRUD App with tanstack</h1>
      <Link to="/create" className="btn btn-primary btn-lg my-5">
        Create +
      </Link>
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}

        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;