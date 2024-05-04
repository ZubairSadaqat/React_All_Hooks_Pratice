import { useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [Decrement, setDecrement] = useState(0);

  const increment = () => {
    for (let index = 0; index < 1920040001; index++) {}
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setDecrement((prev) => prev - 1);
  };

  return (
    <div>
      <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>
        <h2> Use Memo for memoize the value </h2>
        <h3> Count value ; {count}</h3>
        <h3> Decrement value ; {Decrement}</h3>
      </div>
      <button style={{ marginRight: "4rem" }} onClick={increment}>
        {" "}
        Increment
      </button>
      <button onClick={decrement}> Decrement </button>
    </div>
  );
};

export default UseMemo;
