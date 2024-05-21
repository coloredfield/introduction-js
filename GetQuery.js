const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);