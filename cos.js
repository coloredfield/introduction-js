const timeFromDate = date => date.toTimeString().slice(0, 8);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());