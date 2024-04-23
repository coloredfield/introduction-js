const isWeekday = (date) => date.getDay() % 6 !== 0;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const buildOutputPath = path.join(repositoryRootPath, 'out');
const appName = getAppName(channel);