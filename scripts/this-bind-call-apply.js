//understanding the this keyword ,call , apply ,bind -Javascript
//😀 Hello every One today we will see the this keyword in details

//to really understand the 'this' keyword we have to understand what is the porpuse of the this keyword and why we even need this keyword ? 🧐

// this keyword allows us to reuse functions with different contexts or in other words it used to decide which object should be focuale when we invoking a function or method
//  ex : a bunch of objects and have similar properties and we want to work trough all our objects property

//in this article we will break down the 'this keyword ' in the four rules

// 1-Implicit Binding
//2-explicit Binding
//3- new Binding
//4-window Binding

// the first question that you need to ask to know the this keyword is : where this function invoked ?

function sayHi(name) {
  console.log(" Hi 👋 " + name);
}

// if i told you what is the value of name you won't know because you will know until the sayHi is invoked
sayHi("Mahdi");

//here name === 'Mark'

//let cover the first rule 'implicit binding'
//implicit binding is when we call a function  and look to the left of the dot and that what 'this' point to
