import { useState } from "react";
import Header from "./Header";

const ListGroup = () => {
  const items = [
    "New York",
    "New Delhi",
    "Tokyo",
    "London",
    "Paris",
    "San Fransico",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   Eevent handler
  //   const shoot = (event) => {
  //     console.log(event);
  //   };
  return (
    <>
      <Header />
      <h1>List</h1>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
