const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);