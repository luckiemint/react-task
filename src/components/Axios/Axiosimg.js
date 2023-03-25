import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";

// rendering a table with the product data received from the API.
const Axiosimg = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    // HTTP GET request is made to the specified URL using the axios library.
    axios
      .get("https://dummyjson.com/products?limit=15")
      // If the request is successful (i.e. response.ok is true), the setData function is called with the products data that is returned in the response.
      .then((response) => {
        // to handle different response status codes if the request fails.
        if (!response.ok) {
          switch (response.status) {
            case 400:
              break;
            case 401:
              break;
            case 404:
              break;
          }
        }
        setData(response.data.products);
      })
      // If the request fails, an error is logged to the console.
      .catch((error) => console.log(error));
  }, []); //an empty dependency array ([]) passed as the second argument to useEffect ensures that this effect is only executed once when the component is mounted, and not on every re-render.

  const addCart = () => {
    setCart(cart + 1);
  };

  return (
    <>
      <Header />
      <div className="container mainContainer">
        <div className="cart">
          <div>
            <span>Cart({cart})</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* We then used the .map() method to iterate over the data array to render the table  */}
                {data.map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>
                      <img
                        className="pic"
                        key={item.id}
                        src={item.images[0]}
                        style={{ margin: 5 + "px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.brand}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="addCart" onClick={addCart}>
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Axiosimg;
