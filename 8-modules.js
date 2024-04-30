//funtion to use funtions - require
const names = require("./firstModule");
const sayHi = require("./utils");
// console.log(names);

const data = require("./alternative_flavor");
require("./mind-grenade");
console.log(data);
sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

