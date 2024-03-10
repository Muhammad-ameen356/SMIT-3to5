import { useState, useRef } from "react";
import Counter from "./components/Counter/counter";
import abcd from "./components/Counter/style.module.css";

function App() {
  const inputRef = useRef();

  const getRef = () => {
    inputRef.current.focus();

    console.log(inputRef);
  };

  return (
    <>
      {/* <h1>{num}</h1> */}
      {/* <button onClick={click}>Clcik</button> */}
      <Counter />
      <button onClick={getRef}>Ref</button>
      <h1 className={abcd.color}>Muhammad Ameen</h1>
      {/* <h1 ref={h1Ref}>Ameen</h1> */}
      <input ref={inputRef} />
      <button onClick={getRef}>focus</button>
    </>
  );
}

export default App;
