var AAvar1 = 1;
var BBVar = 7;

function AAsomeFunction() {
  var AAsecondVar = 2;
  console.log(AAvar1);
}

function sum(a, b) {
  let c;
  c = a + b;
  console.log(c);
}
// // ES6
export default AAvar1;
export AAsomeFunction;
export sum;

// CommonJS
// module.exports.AAvar1 = AAvar1;
module.exports.AAsomeFunction = AAsomeFunction;
module.exports.sum = sum;
// console.log(module);

// (function (exports, require, module, __filename, __dirname) {
//   // Code
// })()

// abebe.sum(9, 10);
