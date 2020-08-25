//1)what's the output ?
!!null;
!!"";
!!1;
// A: false true false
// B: false false true
// C: false true true
// D: true true false

//************************************************************************************************

//2)What does this return?
[..."Lydia"];

// A: ["L", "y", "d", "i", "a"]
// B: ["Lydia"]
// C: [[], "Lydia"]
// D: [["L", "y", "d", "i", "a"]]

//************************************************************************************************

//3)What's the output?
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
// A: null;
// B: [null];
// C: [{}];
// D: [{ name: "Lydia" }];

//************************************************************************************************

//4) What's the output?
const person = {
  name: "Lydia",
  age: 21,
};

for (const item in person) {
  console.log(item);
}
//   A: { name: "Lydia" }, { age: 21 }
//   B: "name", "age"
//   C: "Lydia", 21
//   D: ["name", "Lydia"], ["age", 21]

//************************************************************************************************

// 5) What's the output?
console.log(3 + 4 + "5");
// A: "345"
// B: "75"
// C: 12
// D: "12"

//************************************************************************************************

//6) What's the value of num? (search about parsInt Function)
const num = parseInt("7*6", 10);
// A: 42
// B: "42"
// C: 7
// D: NaN

//************************************************************************************************

//7) What does this return? (search about Promise.race & Promise.all)
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
// A: "one"
// B: "two"
// C: "two" "one"
// D: "one" "two"

//************************************************************************************************

//8)What's the output`?
[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
//   A: []
//   B: [null, null, null]
//   C: [undefined, undefined, undefined]
//   D: [ 3 x empty ]

//************************************************************************************************

//9)What's the output?
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
//   A: { name: "Lydia" }, "1997"
//   B: { name: "Sarah" }, "1998"
//   C: { name: "Lydia" }, "1998"
//   D: { name: "Sarah" }, "1997"

//************************************************************************************************

//10)What's the output?
function greeting() {
    throw 'Hello world!';
  }
  
  function sayHi() {
    try {
      const data = greeting();
      console.log('It worked!', data);
    } catch (e) {
      console.log('Oh no an error:', e);
    }
  }
  
  sayHi();
//   A: It worked! Hello world!
//   B: Oh no an error: undefined
//   C: SyntaxError: can only throw Error objects
//   D: Oh no an error: Hello world!

//************************************************************************************************

//11)What's the output?
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
// A: "undefined", "number"
// B: "number", "number"
// C: "object", "number"
// D: "number", "undefined"

//************************************************************************************************

//12)What's the output?
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
// A: [1, 1, 2, 3, 4]
// B: [1, 2, 3, 4]
// C: {1, 1, 2, 3, 4}
// D: {1, 2, 3, 4}

//************************************************************************************************

//13)What's the output?
// file -> counter.js
let counter = 10;
export default counter;
// file -> index.js
import myCounter from './counter';

myCounter += 1;

console.log(myCounter);
// A: 10
// B: 11
// C: Error
// D: NaN

//************************************************************************************************

//14)What's the output? (search about variables that save on global "window" object)
const name = 'Lydia';
age = 21;

console.log(delete name);
console.log(delete age);
// A: false, true
// B: "Lydia", 21
// C: true, true
// D: undefined, undefined

//************************************************************************************************

//15) What's the output?
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
// A: [[1, 2, 3, 4, 5]]
// B: [1, 2, 3, 4, 5]
// C: 1
// D: [1]

//************************************************************************************************

//16)What's the output?
const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
// A: { admin: true, user: { name: "Lydia", age: 21 } }
// B: { admin: true, name: "Lydia", age: 21 }
// C: { admin: true, user: ["Lydia", 21] }
// D: { admin: true }

//************************************************************************************************

//17)What's the output?(search about defineproperty and how its worked)
const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));
// A: { name: "Lydia", age: 21 }, ["name", "age"]
// B: { name: "Lydia", age: 21 }, ["name"]
// C: { name: "Lydia"}, ["name", "age"]
// D: { name: "Lydia"}, ["age"]

//************************************************************************************************

//18)What's the output?
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);
// A: "{"level":19, "health":90}"
// B: "{"username": "lydiahallie"}"
// C: "["level", "health"]"
// D: "{"username": "lydiahallie", "level":19, "health":90}"

//************************************************************************************************

//19)What's the output?
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
// A: 10, 10
// B: 10, 11
// C: 11, 11
// D: 11, 12

//************************************************************************************************

// 20)What's the output?
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
// A: 20, 40, 80, 160
// B: 20, 40, 20, 40
// C: 20, 20, 20, 40
// D: NaN, NaN, 20, 40

//************************************************************************************************

//21 )What's the output?
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// A: 1 2 and 3 3 and 6 4
// B: 1 2 and 2 3 and 3 4
// C: 1 undefined and 2 undefined and 3 undefined and 4 undefined
// D: 1 2 and undefined 3 and undefined 4

//************************************************************************************************

//22)What's the output?
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
// A: running index.js, running sum.js, 3
// B: running sum.js, running index.js, 3
// C: running sum.js, 3, running index.js
// D: running index.js, undefined, running sum.js

//************************************************************************************************

//23)What's the output? (search about Symbol type)
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol('foo') === Symbol('foo'));
// A: true, true, false
// B: false, true, false
// C: true, false, true
// D: true, true, true

//************************************************************************************************

//24)What's the output?
async function getData() {
  return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);
// A: "I made it!"
// B: Promise {<resolved>: "I made it!"}
// C: Promise {<pending>}
// D: undefined

//************************************************************************************************

//25)What's the output?
function addToList(item, list) {
  return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);
// A: ['apple', 'banana']
// B: 2
// C: true
// D: undefined

//*********************************************************************************** */
/**
 *And also search about :
 *difference between 'push' and 'concat'
 *difference between 'slice' and 'splice'
 *difference between these two syntax:
 * 1) {...rest , newPropery : value}
 * 2) rest.newProperty = value
 */

