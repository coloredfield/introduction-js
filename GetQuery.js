const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isEmptyArray = arr => !arr.length;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);