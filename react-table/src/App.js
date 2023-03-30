import React from 'react';
import { useTable } from 'react-table';
import './App.css';
import fakeData from './MOCK_DATA.json'

function App() {
  // console.log(fakeData)
  // The useMemo hook is used to memoize the data and columns variables, which means they will only be re-computed if their dependencies change.
  const data = React.useMemo(() => fakeData, [])
  const columns = React.useMemo(() => [
    // The table has six columns: ID, First Name, Last Name, Email, Gender, and University.
    {
      Header: "ID",
      accessor: "id"
    },
    {
      Header: "First Name",
      accessor: "first_name"
    },
    {
      Header: "Last Name",
      accessor: "last_name"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "University",
      accessor: "university"
    }
  ], []);

  // The useTable hook is used to create an instance of the table with the given columns and data. 
  // The getTableProps method is used to get the props that should be applied to the table element.
  // The headerGroups variable contains an array of objects representing the header rows of the table. Each header row is represented by an object containing an array of headers representing the cells in the row.
  // The getTableBodyProps method is used to get the props that should be applied to the tbody element. The rows variable contains an array of objects representing the rows of the table. Each row is represented by an object containing an array of cells representing the cells in the row.
  // The prepareRow function is called for each row to ensure that it is ready to be rendered. 
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
  return (
    <div className="App" >
      <div className='container'>
        {/* Finally, the table is rendered using standard HTML table, thead, tbody, tr, and td elements.  */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {/* The render method is used to render the content of each cell based on the accessor property defined in the columns array. */}
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              // This method prepareRow() is used to prepare a row for basically rendering. It is called in each row, so whenever you loop the rows array it will be called for each row that your rendering and it takes 'row' as an argument. In conclusion, it is needed to render your rows in our table.
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
