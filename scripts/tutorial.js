// let and var overwritting
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
// arrow function
// var getRegValue = function (params) {
//   return 20;
// };

// console.log(getRegValue());

// const getArrowvalue = (m, bonues) => 45 * m * bonues;

// console.log(getArrowvalue(34, 2));

// thiskeyword
// var employe = {
//   id: 2,
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.id);
//     }, 100);
//   },
// };

// employe.greet();

// default paramters

// let getValue = function (value = 10, bonus = value * 1) {
//   console.log(value + bonus);
// };

// getValue();
// getValue(20);
// getValue(20, 30);
// getValue(undefined);
// display colors

// let displayColors = function (msg, ...colors) {
//   for (let i in colors) {
//     console.log(i);
//     console.log(colors[i]);
//   }
// };

// displayColors("hi", "red", "greeen");
// rest operator is specify during the initialization of function and // spread operator is specifiying during the function call

// let firstname = "mahdi";
// let lastname = "soultana";

// inES6 when we have obect letteral and we have the name of the proporty is the same name as the varaible name so we can make a short hand of the object and his value like in the code below

// let person = {
//   firstname,
//   lastname,
// };

// console.log(person);

// even with functions

// function createPerson(firstname, lastname) {
//   let fulname = firstname + " " + lastname;
//   return {
//     firstname,
//     lastname,
//     fulname,
//     isSenior(age) {
//       return age > 40;
//     },
//   };
// }

// const p = createPerson("hi", "ni");
// console.log(p);
// console.log(p.isSenior(50));

//distructring array is get part of array
// let employee = ["alex", "neei", "alex", "neei"];

// let [fname, lname, ...gender] = employee;

// console.log(fname, lname, gender);

// const employee = {
//   fname: "nooo",
//   lname: "asdasa",
// };

// let { fname: f, lname: l, gender: g = "fmale" } = employee;

// console.log(f, l, g);

//string template

// let user = "Nox";
// let greet = `"Welcome  ${user} to ES2015"

// this is the second line   nooo this is white space
//        as you see right now
// `;
// console.log(greet);

//for of loop with arrays and strings

// let colors = ["red", "green", "blue"];

// for (let color of colors) {
//   console.log(color);
// }
// for in loop

// for (let index in colors) {
//   console.log(colors[index]);
// }

// //for of with strings
// let letters = "heloooooo";
// for (let letter of letters) {
//   console.log(letter);
// }

//class in JS
// class Person {
//   greet() {}
// }
// let p = new Person();
// console.log(typeof Person);
// console.log(Person.prototype.greet === p.greet);

// we have 3 method in the class stantacs

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   static staticMethod() {
//     console.log("im static method from the class");
//   }
//   greet() {
//     console.log("im prototyped method ");
//   }
// }

// let p = new Person("mandi");
// console.log(p);

//extends & super keywords

// class Person {
//   constructor(name) {
//     console.log(name + " contructor");
//     this.name = name;
//   }
//   getID() {
//     return 43;
//   }
// }

// class Employe extends Person {
//   constructor(name, job) {
//     console.log(name + " employee");
//     super(name);
//     this.job = job;
//   }
//   getID() {
//     let parentID = super.getID();
//     return parentID + 50;
//   }
// }

// // const e = new Employe("dnoooo");

// const e = new Employe("heeeeeey", "dev");
// const p = new Person("heeeeeey", "dev");
// console.log(p.getID());
// console.log(e.getID());

//extends keywords is used to inherite all parent methods and constructor
//and why used super to make a call and get all property object from the parent class and also to access all methods in the parent class

///

// Module is
// Book Chapers and Sections
//Understand The progression
// Find Specific parts that you are trusted in
// Focus clear to the reader

// helps people to find what they are looking for  AND the main idea behind module is export in import
//2 types of modules named and default modules
//import statement module  are hiosted
//import are read only ex var that you want to change you can't with module is just for read only\\\

//default export
// alias default import
// import {default as f} from './firstname'

//Sets && Maps

//sets data structure  is list of values witout  dupliacted value

// const mySet = new Set();

// mySet.add("heloooo");
// mySet.add({});
// mySet.add({});
// console.log(mySet.size);

// let newSet = new Set([1, 2, 4, 4, 5, 5]);

// console.log(newSet.size);

// console.log(newSet.delete(1));

// console.log(newSet.has(1));

// WeakSet is like strong set but  when you change the reference so weakset garpge also the reference automatically

// const set = new WeakSet();
// let key = {};
// set.add(key);
// key = null;
// console.log(set);

//Maps when can stor defferent key of any type with their value pair
// let myMap = new Map();

// myMap.set(34, "hello");
// myMap.set(34, "sdsdsd");

// console.log(myMap.get(34));

// let myMap = new Map([
//   ["f", "mahdi"],
//   ["l", "soultana"],
// ]);

// for (let key of myMap.keys()) {
//   console.log(key);
// }
// for (let value of myMap.values()) {
//   console.log(value);
// }
// for (let [key, value] of myMap.entries()) {
//   console.log(`${key} > ${value}`);
// }

//forEach loop

// var numbers = [1, 2, 3, 4];
// var set = new Map([
//   ["jej", 2],
//   [3, 4],
// ]);
// set.forEach(fnLoop);
// function fnLoop(el, i, arr) {
//   console.log({ el, i, arr });
// }

//symbols >>generate unique id

// let s = Symbol();
// console.log(typeof s);

// let s2 = Symbol("description");
// let s3 = Symbol();

// console.log(s2 === s3);

// //symbol registry

// let s4 = Symbol.for("regSymb");

// let s5 = Symbol.for("regSymb");

// console.log(s5 == s4);

// console.log(Symbol.keyFor(s4));

// let fname = Symbol("firstName");
// let person = {
//   [fname]: "heeeeee",
// };

// console.log(person);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));

//iterator methods\\

//we access index varaible typeof Symbol.iterator to check if it is a function so we know that this varaible we can use it in for of LOOP or undefind which is NOT
// let str = "Hello";
// let arr = [1, 2, 3];
// let num = 5;
// let obj = { name: "mahdi" };

// console.log(typeof str[Symbol.iterator]);
// console.log(typeof arr[Symbol.iterator]);
// console.log(typeof num[Symbol.iterator]);
// console.log(typeof obj[Symbol.iterator]);

// Iterable{
//     [symbol.Iterator]():Iterator
// }
// Iterator{
//     next():IResultObj
// }
// IResultObj{
//     value: any
//     done:bool
// }

// let's create our iterator

// function createIterator(arr) {
//   let count = 0;

//   return {
//     next: function () {
//       return count < arr.length
//         ? {
//             value: arr[count++],
//             done: false,
//           }
//         : {
//             value: undefined,
//             done: true,
//           };
//     },
//   };
// }

// const iterator = createIterator([1, 2, 3, 1, 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//generator is a function capable to pause and resumig with help of yeild Keyword
// function* createGenerator() {
//   yield 1;
//   console.log("afrer 1st yeild");
//   yield 2;
// }

// let myGen = createGenerator();

// console.log(myGen.next()); //return an obj with the value reutrn from the func
// console.log(myGen.next());
// console.log(myGen.next());

//TYPESCRIPT
//IS supperest of javascript and types are optional  for identify mistakes during development //TS === all esX javascript

//decalre varaibles in TS

//type infirance you can hover lable and you will see the type infirance
// var x = 10;
// var y = "10";
// var z = true;

// //type anotation (specifaction)
// var a: number = 10;
// var b: string = "hello";
// //any type is the base type for any declarative value

// var info: any;

// // this is what javascript do
// info = 10
// info = 'Hello'
// info = true

//enum used to give frindly names for numric value and create specifque type for a varaible

// enum EyeColor { Brown=2,Black=4,Blue=32 }

// var myEyeColor = EyeColor.Black
// console.log(myEyeColor)//4
// console.log(EyeColor[myEyeColor])//Black
