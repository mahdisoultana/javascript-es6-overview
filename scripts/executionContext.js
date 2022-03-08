/*
Implicte Binding
Explicit Binding
New Binding
Window Binding

*/

// Implicit Binding
//Left of the Dot at Call Time

// var Person = function (name, age) {
//   return {
//     name,
//     age,
//     sayName: function () {
//       console.log(this.name);
//     },
//     mother: {
//       name: "Stacey",
//       sayName: function () {
//         console.log(this.name);
//       },
//     },
//   };
// };

// var Jim = Person("Agey", 34);

// Jim.sayName(); //Agey
// Jim.mother.sayName(); //Stacey

//Explicit Binding
//call, apply ,bind

//function sayName(parm1,parm2,parm3...){...}

//call explicit Binding of this Keywork , we can access to it as an object in function that givin us the ablity   to call the funtion immidiatly & point to new  ''this''  keyword in the function and we can pass argument and recive them one by one as a parameters
//sayName.call("ObjectToBindHere" ,arg1,arg2,arg3...)

//applay is the same thing as call just passing the parameter one by one we pass all argument in one single Array

//Bind is the same thing as "call" just instead for calling the function imediatly we return it back configured with new pointer and all argument setup to call it later

// var sayName = function () {
//   console.log(this.name);
// };

// var jim = {
//   name: "mark",
//   age: 34,
// };

// var nike = {
//   name: "nike",
//   age: 34,
// };
// var language = ["javascript", "c#", "NodeJs"];

// sayName.call(jim);

// sayName.call(nike);

//new Binding
//when we call a function with new keyword it will point to new created empty object and whenever we attached some property with value it will be in the object this keyword and it will returned automaticly

function Person(name) {
  // this={}
  this.name = name;
  // return this
}

const person = new Person("nini");
console.log(person); //{name:"nini"}

//window binding if we call a function  have "this" Keyword without  implicit(left to Dot) or explicit (call,bind,applay) or new keyword so the "this" Keyword will be defaulted to the window Object
