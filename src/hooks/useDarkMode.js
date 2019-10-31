import React, { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark Mode?", false);

  useEffect(() => {
    const body = document.querySelector('body');
    console.log(body.className);
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
