const intermediateAppPath = path.join(buildOutputPath, 'app');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isArray = (arr) => Array.isArray(arr);