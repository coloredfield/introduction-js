const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const arrayContains = (arr, element) => arr.includes(element);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const appName = getAppName(channel);