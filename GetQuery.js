const repositoryRootPath = path.resolve(__dirname, '..');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);