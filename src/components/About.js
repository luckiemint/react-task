import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../App.css";
import axios from "axios";
import { display } from "@mui/system";

const About = ({ color, setColor }) => {
  // useState

  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");

  // useEffect Counter:  is dependent on a variable. If the count variable updates, the effect will run again:
  function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }

  // Clean up the timer at the end of the useEffect Hook:
  function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let timer = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    return <h1>I've rendered {count} times!</h1>;
  }

  function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          // console.log(response.data.products); // handle success
          setData(response.data.products);
        })
        .catch((error) => console.log(error)); // handle error
    }, []);

    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>
            {item.title}
            {item.images.map((url, index) => (
              <img
                key={index}
                src={url}
                width="40px"
                style={{ margin: 5 + "px" }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  // displaying the useState Output here
  return (
    <>
      <Header />
      <div className="mainContainer">
        <h1>About-useState</h1>
        {/* //color */}
        <h3>My fav color is {color}</h3>
        <div className="colorBtn">
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("red")}>Red</button>
        </div>
        {/* car */}
        <h3>
          It is a {color} {model} from {year}.
        </h3>
        <Counter />
        <Timer />
        <MyComponent />
      </div>
    </>
  );
};

export default About;
