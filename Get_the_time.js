const randomString = () => Math.random().toString(36).slice(2);
const merge = Object.assign({}, obj1, obj2);
const isEmptyArray = arr => !arr.length;