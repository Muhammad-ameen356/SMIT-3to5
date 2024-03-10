import React, { useState } from "react";
import counterStyles from "./style.module.css";

const Counter = () => {
  const [num, setNum] = useState(1);

  const increase = () => {
    console.log(num + 1);
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };
  return (
    <div className={counterStyles.color}>
      <h1>{num}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
