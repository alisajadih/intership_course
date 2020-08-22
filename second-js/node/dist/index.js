"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.time("Reading Files");
// for (let i = 1; i <= 5; i++) {
//   console.time("reading..." + i);
//   const file = fs.readFileSync("./files/" + i + ".big.txt", "utf8");
// //   console.log("file " + i + ": " + file);
//   console.timeEnd("reading..." + i);
// }
// console.timeEnd("Reading Files");
// console.time("Reading Files");
// for (let i = 1; i <= 5; i++) {
//   console.time("reading..." + i);
//   fs.readFile("./files/" + i + ".txt", "utf8", (err, file) => {
//     console.timeEnd("reading..." + i);
//   });
// }
// console.timeEnd("Reading Files");
console.time("Reading Files");

for (let i = 1; i <= 5; i++) {
  console.time("reading..." + i);

  _fs.default.readFile("./files/" + i + ".txt", "utf8", () => {});
}

console.timeEnd("Reading Files"); // console.log()
// for(let i = 0 ; i < 1000000000 ; i++) {
//     console.log('hi')
// }
// for()
// if (){
// }
// function