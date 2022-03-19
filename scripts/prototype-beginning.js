// let parent = {
//   name: "Stracy",
//   heritage: "soultana",
// };

// //object.create allows us to make a look up at the obejct parent
// let child = Object.create(parent);

// child.mane = "ready";
//child object doesn't  have heritage property so object.create allows us to make a look up if we have any proprty called heritage (ex)
// console.log(child.heritage); //soultana

// ///////////////
// let's make  logic reusable

function Child(name, age) {
  let child = {};
  child.name = name;
  child.age = age;

  //let add some methods to this object

  child.getAge = function () {
    let age = this.age;
    console.log(age);
    return age;
  };
  child.sayHello = function () {
    console.log(`Hello i'm ${this.name}`);
  };
  return child;
}

const mahdi = Child("mahdi", 23);

console.log(mahdi.sayHello());
//the problem with this approche that let's say we're building a game and each objector each player will have planty of methods so will get for a lot of memory stockage for each player and we have tons of players and ennemies

//so to make thing much cleaner and much perfermance we will make one object the has all methods required and we will use them for all our player

//HOW? javascript giving us Object.create() which is a method that allows us make a look and try to find if the property in the object that we pass in as an argument

// function Child(name, age) {
//   //this create an empty object and make a connection to the gamesMethod
//   let child = Object.create(gamesMethod);
//   child.name = name;
//   child.age = age;

//   return child;
// }
// const gamesMethod = {
//   eat() {
//     console.log("i'm eating right now 🍖🥙🌭 ");
//   },
//   fight() {
//     console.log("punch with the dark magic🐱‍🏍");
//   },
//   spells() {
//     console.log("kabra kadabra 🌌 🕸");
//   },
// };
// const mahdi = Child("mahdi", 23);
// console.log(mahdi.spells()); //"kabra kadabra 🌌 🕸"
// console.log(mahdi.eat());//"i'm eating right now 🍖🥙🌭 "

///////////
// it's this logic is more powerfull and has alot of performance impact
//let make things more better and see what problem we have again with this approche

// we have a property called Proptotype : prototype its really simple than in interviews make it complexe
//each function has a property called protoype which point to an empty object so we can use this objext in the function contructor also constorctur is term to a function that consturct an object we call it constructor ,to append any value to this prototype and it will be shared with all instances because we point to it via Object.create(functionName.prototype) or new keyword will do that automatcly behind the scenes
//javascrippt giving us in our toolsbox a keyword Call 🧐'new' what that keyword do for us
//simple its create an empty object == this   and point to the prototype of the function like explain above and return the this object
//let see this in Code 👇

// function Child(name, age) {
//   // let child = Object.create(gamesMethod);
//   this.name = name;
//   this.age = age;
//   // return this
// }
// Child.prototype.eat = function () {
//   console.log("i'm eating right now 🍖🥙🌭 ");
// };

// Child.prototype.fight = function () {
//   console.log("punch with the dark magic🐱‍🏍");
// };
// Child.prototype.spells = function () {
//   console.log("kabra kadabra 🌌 🕸");
// };
// const john = new Child("john", 34);

// john.fight();
// now i think w're way better then the first approche is there any better solution ?

//well as you know javascript is a dynmaic language programming and also its involved each year in 2015 ES6
//javascript community made new simple way to use function constructor the which is just a syntatic sugar like they said they not changing what under the hood javascript do like we went step by step to make a function constructor this feature called 'class' so if you have a different background from java or c++ you will  be familaire with the class consturctor let's how this look likes

// class Child {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   spells() {
//     console.log("kabra kadabra 🌌 🕸");
//   }
//   eat() {
//     console.log("i'm eating right now 🍖🥙🌭 ");
//   }
//   fight() {
//     console.log("punch with the dark magic🐱‍🏍");
//   }
// }

// const name = new Child("anana", 34);

// console.log(name.eat());
///And Done yeah class is more convient way to construct an object and encapsulate all your method in your class consturct , and it's every good to know that
