import React, { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
const [someValue, setSomeValue] = useLocalStorage('Dark Mode?');

useEffect (() => {
    const body = document.querySelector('body');
window.localStorage('Dark Mode?') ? body.classList.add('dark-mode') :
    body.classList.remove('dark-mode')
},[]);
};

export default useDarkMode;