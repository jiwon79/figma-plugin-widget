import "@won-types";
import { useState } from "react";
import { UIBus } from "../domains";

export function App() {
  const initNumber = "__MACRO__number";
  const [number, setNumber] = useState<number>(parseInt(initNumber));

  const increamentNumber = () => {
    const newNumber = number + 1;

    UIBus.send({
      type: "SET_NUMBER",
      payload: { number: newNumber },
    });
    setNumber(newNumber);
  };

  return (
    <>
      <h6>Widget With UI</h6>
      <p>number: {number}</p>
      <button onClick={() => increamentNumber()}>
        <p>increament number</p>
      </button>
    </>
  );
}
