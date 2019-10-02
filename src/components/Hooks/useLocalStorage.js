import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== "string") {
    throw new Error("Invalid Params: useLocalStorage args should be string");
  }

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
    //previous 2 lines accomplishes the same as above
    // if (localStorage.getItem(key)) {
    //   return JSON.parse(window.localStorage.getItem(key));
    // } else {
    //   window.localStorage.setItem(key, JSON.stringify(value));
    //   return initialValue;
    // }
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
