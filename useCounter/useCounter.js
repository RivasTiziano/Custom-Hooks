import { useState } from "react";

export const useCounter = (initialValue = 10, dif = 1, high = 100, low = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    if (counter + dif <= high && counter + dif >= low) {
      setCounter((current)=>current + dif);
    }
  };
  const reset = () => setCounter(initialValue);
  const decrement = () => {
    if (counter - dif >= low && counter - dif <= high) {
      setCounter((current)=>current - dif);
    }
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
