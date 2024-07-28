const apmRootPath = path.join(repositoryRootPath, 'apm');
const appName = getAppName(channel);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};