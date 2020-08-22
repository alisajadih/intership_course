// 1) What's the output
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
//   A: Lydia and undefined
//   B: Lydia and ReferenceError
//   C: ReferenceError and 21
//   D: undefined and ReferenceError

// ************************************************************************************************************

// 2) What's the output
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
// A: 0 1 2 and 0 1 2
// B: 0 1 2 and 3 3 3
// C: 3 3 3 and 0 1 2

// ************************************************************************************************************

// 3)What's the output
+true;
!"Lydia";
// A: 1 and false
// B: false and NaN
// C: false and false

// ************************************************************************************************************

// 4)Which one is true?

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// ************************************************************************************************************

//5)What's the output?
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);

// A: Hello
// B: Hey!
// C: undefined
// D: ReferenceError
// E: TypeError

// ************************************************************************************************************

//6)What's the output?
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

// A: true false true
// B: false false true
// C: true false false
// D: false true true

// ************************************************************************************************************
//7)What's the output?

let greeting;
greetign = {}; // Typo!
console.log(greetign);

// A: {}
// B: ReferenceError: greetign is not defined
// C: undefined

// ************************************************************************************************************

//8) What happens when we do this?
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
//   A: Nothing, this is totally fine!
//   B: SyntaxError. You cannot add properties to a function this way.
//   C: "Woof" gets logged.
//   D: ReferenceError

// ************************************************************************************************************

//9) What's the output?
function sum(a, b) {
  return a + b;
}

sum(1, "2");
// A: NaN
// B: TypeError
// C: "12"
// D: 3

// ************************************************************************************************************

//10)What's the output?
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2

// ************************************************************************************************************

//11)What's the output?
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
// A: You are an adult!
// B: You are still an adult.
// C: Hmm.. You don't have an age I guess

// ************************************************************************************************************

//12)What's the output?
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
// A: "number"
// B: "array"
// C: "object"
// D: "NaN"

// ************************************************************************************************************

// 13)What's the output? (search about Set in JavaScript)
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
// A: false true false true
// B: false true true true
// C: true true false true
// D: true true true true

// ************************************************************************************************************

//14)What's the output?
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }
// D: SyntaxError

// ************************************************************************************************************

//15)What's the output? (search about prototype in JavaScript)
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
//   A: "Just give Lydia pizza already!"
//   B: TypeError: not a function
//   C: SyntaxError
//   D: undefined

// ************************************************************************************************************

//15)What's the output?
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// A: 123
// B: 456
// C: undefined
// D: ReferenceError

// ************************************************************************************************************

//16) What's the output?
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar();
foo();
baz();
// A: First Second Third
// B: First Third Second
// C: Second First Third
// D: Second Third First

// ************************************************************************************************************

//17)What's the output?
function sayHi() {
    return (() => 0)();
  }
  
  console.log(typeof sayHi());
//   A: "object"
//   B: "number"
//   C: "function"
//   D: "undefined"

// ************************************************************************************************************

//18)Which of these values are falsy?
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
// A: 0, '', undefined
// B: 0, new Number(0), '', new Boolean(false), undefined
// C: 0, '', new Boolean(false), undefined
// D: All of them are falsy

// ************************************************************************************************************

//19)What's the output?
console.log(typeof typeof 1);
// A: "number"
// B: "string"
// C: "object"
// D: "undefined"

// ************************************************************************************************************

//20)What's the output?
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
// A: [0, 1, 2, 3, 1, 2]
// B: [6, 1, 2]
// C: [1, 2, 0, 1, 2, 3]
// D: [1, 2, 6]

// ************************************************************************************************************


