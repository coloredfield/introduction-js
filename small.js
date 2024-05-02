const stringReverse = str => str.split("").reverse().join("");
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());