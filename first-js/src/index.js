// import { add, glovbalVar } from "./mathLib";
// import * as math from "./mathLib";
// import { add as newAdd, glovbalVar } from "./mathLib";
// import MathLib from "./mathLib";
// import {add} from './mathLib'
// console.log(add(3, 5));
// console.log(math.add(math.glovbalVar, 5));
// console.log(newAdd(glovbalVar, 5));

/**
Let, const, scope - Variable
Object -
Function & Arrow Function -
Object destructuring, Array destructuring -
Spread operator -
Hoisting -
Higher order function -
Closure -
Map, filter, reduce -
Import & export -
Pass by value vs pass by reference -
js type coercion
*/
//------------------Variables--------------------------

// var a = 10;
// let b = 20;
// const c = 30;

// if (true) {
//   var d = 3;
// }

// if (true) {
//   let f = 3;
//   const h = 4;
// }
//Temporal dead zone TDZ
/***
 * {
 *     key->string : value->any,
 * }
 */

// const u = {
//   name: "john",
//   age: 17,
// };
//primitive types
// number , string ,boolean ,undefined , Symbol

//reference types
// Object , Array

// const a = {
//   name: "john",
// };
// let d = { name: "david" };
// a = d;
// a.name = "hi ";
//------------------------------------Object-----------------------

let a = {
  name: "david",
  age: 15,
};

let temp = 'name'
console.log(a['name'])
// a[temp]

// const temp = [
//   ["name", "david"],
//   ["age", 15],
// ];
// console.log(a.name);
// a.family = "smith";
// console.log(a);

// string , number , function ,array instance of object

// const values = Object.values(a);
// console.log(values);
// const keys = Object.keys(a);
// console.log(keys);
// const entries = Object.entries(a);
// console.log(entries);
// const fromEntries = Object.fromEntries(temp);
// console.log(fromEntries);

//-----------------Functions and arrow Functions && Higher order function---------------------

// function myFunc() {

// }

// const myFunc = (input) => {
//   return;
// };

// function add(a, b) {
//   return a + b;
// }
// const arrAdd = (a, b) => a + b;

// console.log(add(3, 5));
// console.log(arrAdd(3, 5));

// HOF
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const newFunction = add(4);
// console.log(newFunction(5));
// console.log(add(2)(5));

// const add = (a) => (b) => a + b;
// const newFunction = add(3);
// console.log(newFunction(5));

// function apply(fn, input) {
//   fn(input);
// }

// function logger(i) {
//   console.log(i, "IN LOGGER FUNCTION");
// }

// apply(logger, "First Js Section");
//---------------------------------------Object destructuring, Array destructuring--------------------
// const info = {
//   name: "Scott",
//   family: "Smith",
//   age: 21,
//   grade: 3,
//   skill: "Back End",
// };
// const name = "Asqar";
// const { name: infoName, family, age, grade, skill = "Front End" } = info;
// console.log(infoName, family, age, grade, skill);
// logger(info);
// function logger({ name: Name = "Ali", family = "Sajadi", age = 21 }) {
//   console.log(Name, family, age);
// }

// const colors = ["red", "blue", "green"];
// const [red, blue, green] = colors;
// console.log(red, blue, green);
//-------------------------Spread Operator------------------------

// const scottInfo = {
//   name: "Scott",
//   family: "Smith",
//   age: 21,
//   grade: 3,
//   skill: "Back End",
// };

// const newInfo = scottInfo;
// newInfo.name = "John";
// console.log(scottInfo === newInfo);

// const newObject = { ...scottInfo };
// console.log(newObject);
// console.log(newObject === scottInfo);

// const { skill, grade, ...personalInfo } = scottInfo;
// console.log(personalInfo);

// function infoLogger({ skill, grade, ...personalInfo }) {
//   console.log(personalInfo);
// }
// infoLogger(scottInfo);

// const colors = ["red", "green", "blue"];

// const newColors = [...colors, "Orange"];
// console.log(newColors);
//--------------------------------------Hoisting-------------------------------

// function logger(input) {
//   console.log(input);
// }
// logger("HI");

// let secondLogger;
// secondLogger("Bye");
// // console.log(secondLogger);
// secondLogger = (input) => {
//   console.log(input);
// };
// //declation

// //initialization
// // var a;

//  console.log(a);
//  const a = 12;


//--------------------------------------Closure-------------------------------

// function add(i) {
//   const b = 12;
//   console.log(i + b);
// }

// add(5);
// add(6);
// add(7);
// add(8);

// function tempFunc() {
//   let a = 10;
//   function addToTwo() {
//     return a + 2;
//   }
//   return addToTwo();
// }
// console.log(tempFunc());

// function tempFunc() {
//   let a = 12;
//   function addToTwo() {
//     return a + 2;
//   }
//   return addToTwo;
// }
// const adder = tempFunc();
// console.log(adder());

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const addToOne = add(1);
// const addToTwo = add(2);
// const addToThree = add(3);
// const addToFour = add(4);
// console.log(addToOne(3), addToFour(4));

//---------------------------------------Map, Reduce , Filter--------------------------------------
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < a.length; i++) {
//   console.log(i);
// }
// let b = [];
// a.forEach((value, index, array) => {
//   b.push(value + 10);
// });
//immutability , immutable

// const b = a.map((value, index, array) => {
//   return value + 10;
// });
// console.log(b);

// const b = a.filter((value, index, array) => value % 2 === 0);
// console.log(b);

// const sum = a.reduce((accumulator, currentValue, currenIndex, array) => {
//   console.log("preValue : ", accumulator);
//   console.log("CurrentValue : ", currentValue);
//   return accumulator + currentValue;
// }, 0);

// const letterNumbers = [
//   {
//     a: 1,
//   },
//   {
//     a: 3,
//   },
//   {
//     a: 4,
//   },
// ];
// const sum = letterNumbers.reduce((acc, curr) => {
//   return acc + curr.a;
// }, 0);
// console.log(sum);

//---------------------------Pass by value vs pass by reference -----------------------
// const a = {
//   name: "ali",
//   age: 21,
// };
// console.log(a);
// function addPropertyGrade(obj, grade) {
//   return (obj.grade = grade);
// }
// addPropertyGrade(a, 3);
// console.log(a);

// const b = 12;
// console.log(b);
// function fiveAdder(input) {
//   return input + 5;
// }
// fiveAdder(b);
// console.log(b);
