const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);