const util = require("util");

const name = "giorgi" 

console.log(util.types.isDate(name))
// ამოწმებს არის თუ არა ობიექტისთარიღი
const myMap = new Map();
console.log(util.types.isMap(myMap));
// მაპ ობიქტი სშემოწმება

console.log(Array.isArray([1, 2, 3])); 
// ამოწმებს მასივი არის თუ არა

