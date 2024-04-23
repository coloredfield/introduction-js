const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const channel = getChannel(computedAppVersion);
const lastElement = arr => arr[arr.length - 1];