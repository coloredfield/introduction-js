const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const flattenedArray = arr => [].concat(...arr);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const currentDate = () => new Date().toLocaleDateString('en-US');