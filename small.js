const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const randomBoolean = () => Math.random() >= 0.5;
const results = await Promise.all(resultingPromises);