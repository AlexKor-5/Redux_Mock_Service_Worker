import React, { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increase = (setValue = (f) => f) => {
    setValue(value + 1);
  };

  const decrease = (setValue = (f) => f) => {
    setValue(value - 1);
  };

  return (
    <div>
      <button onClick={() => decrease(setValue)}>-</button>
      <h1>{value}</h1>
      <button onClick={() => increase(setValue)}>+</button>
    </div>
  );
};
