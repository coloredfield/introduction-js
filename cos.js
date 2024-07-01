const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const reversedString = str => str.split('').reverse().join('');