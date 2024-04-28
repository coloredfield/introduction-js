const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const merge = [...new Set([...a, ...b])];
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");