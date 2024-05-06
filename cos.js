const timeFromDate = date => date.toTimeString().slice(0, 8);
const isEven = (num) => num % 2 === 0;
const uniqueArray = arr => [...new Set(arr)];