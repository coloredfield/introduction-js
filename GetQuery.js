const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
console.log(false === '0');
const lastElement = arr => arr[arr.length - 1];