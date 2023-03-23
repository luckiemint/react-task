import React, { useMemo, useState } from "react";

const Memo = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };

  const IncrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };
  //   The useMemo hook is used to memoize the result of a complex computation
  // Without memoization, the function would be re-executed every time the component is rendered, causing a delay in rendering.
  const isEven = useMemo(() => {
    console.warn(".........");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0; //returns the memoized value
  }, [counterOne]); // <= we have provided a array dependencies so that it only re-renders(memoized value will only be recalculated) when there's a change in counterOne

  //When a component re-renders in React, all the code inside the component function is executed, including any computations or expensive operations that are not memoized. This can cause unnecessary delays in rendering, especially if the component is complex and contains many elements.
  //   So by using useMemo to memoize the result of the computation for isEven, the component can avoid re-executing this code on every render if the value of counterOne has not changed.
  //   const isEven = () => {
  //     console.warn(".........");
  //     let i = 0;
  //     while (i < 2000000000) i++;
  //     return counterOne % 2 === 0;
  //   };

  return (
    <>
      <div>
        <button onClick={IncrementOne}>counterOne - {counterOne} </button>
        <span>{isEven ? "Even" : "Odd "}</span>
        <button onClick={IncrementTwo}>counterTwo - {counterTwo} </button>
      </div>
    </>
  );
};

export default Memo;
