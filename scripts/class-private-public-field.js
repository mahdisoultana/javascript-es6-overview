//  Class field declarations for JavaScript\
// (now in stage 4  mean that the addition is ready for inclusion in the formal ECMAScript standard )
// https://github.com/tc39/proposal-class-fields

//can we make this class es6 syntax better with class field Porposal ?
// class Player {
//   constructor(energy, name) {
//     this.energy = energy;
//     this.name = name;
//   }
//   eat(amout) {
//     console.log("i'm eating now 🍖🍖🍖");
//     this.energy += amout;
//   }
//   spell() {
//     console.log(`${this.name}'s spell magic 🌌🌌🌌`);
//   }
//   help(energy) {
//     this.energy += energy;
//     console.log(`${this.energy} 🧬🧲🛠`);
//   }
// }

//get rid of constructor and just add all the instances like the method directly in the class

// // instead of having constructor method w're just having something like thiis
class Player {
  energy = 0;
  name = "";
  eat(amout) {
    console.log("i'm eating now 🍖🍖🍖");
    this.energy += amout;
  }
  spell() {
    console.log(`${this.name}'s spell magic 🌌🌌🌌`);
  }
  help(energy) {
    this.energy += energy;
    console.log(`${this.energy} 🧬🧲🛠`);
  }
}

const agile = new Player();
console.log(agile.eat(34)); //i'm eating now 🍖🍖🍖
console.log(agile.energy); //34

//this proposal allows you to add instance property directly as property in the class without having to use constructor methods 
//but this proposal where is really shine when it's came to React code

// class PlayerInput extends Component {
//   consturctor(props) {
//     super(props);
//     thisl.state = {
//       username: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       username: event.target.value,
//     });
//   }

//   render() {
//     ////.......
//   }
// }
/* what we can do new class field   
 
class PlayerInput2 extends Component {
  // we can add state directly in the class
  state = { username: "" };
convert method to arrow function for binding 'this' keyword to the component 

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    ////.......
  }
}

//////*/

/* according to ES6 class we can add static methods in our class directly like this

class StaticMethod {
  static methodInTheClass() {
    console.log("hello i'm a property in the this class  ");
  }
  he() {}
}

StaticMethod.anotherMethod = function () {
  console.log("heloo i'm another method from outside ");
};
StaticMethod.PropTypes = {
  userName: PropTypes.string,
};

console.log(StaticMethod.methodInTheClass());
console.dir(StaticMethod);
*/
// this is good es6 features
//can we add a property like we added a static mehods in the class this what class field porposal cams to play

// you can look at the example and see how we add PropTypes in the Components or in the Class
//what we can do is
/*
class StaticMethod {
  static methodInTheClass() {
    console.log("hello i'm a property in the this class  ");
  }
  //Look here how we can add a static 👇👇property direclty in the class
  static PropTypes = {
    userName: "",
  };
  he() {}
}

console.dir(StaticMethod);
console.dir(StaticMethod.methodInTheClass()); //"hello i'm a property in the this class  "
console.dir(StaticMethod.PropTypes); // {  userName: "", }
*/
/*
class PlayerInput {
  // to get rid of this consturctor is to find a way to bind the handleChange method so when we invoke it
  //it's going to bound to the correct context 'this'  🤨
  //
  //we know that the arrow function they don't have their own this keyword instead the "this"  keyword is bound lexically meaning that this keyword in arrow function they will act like a normal varaible and try to look up in his parent scoop if that has 'this' keyword

  consturctor(props) {
    // super(props);
    // this.handleChange = this.handleChange.bind(this);
  }
  state = {
    username: "",
  };
  //if we change the handleChange from a function to an arrow function we can solve the bind line in the constructor with an arrow function so this.setState() 'this ' keyword i will be the playerInput because the value of this keyword lexically is PlayerInput class Constructor
  logThis = () => {
    console.log(this, "this"); // PlayerInput
  };
  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    ////.......
  }
}

const inp = new PlayerInput();
inp.logThis();
*/
//from developer expereinces class field is abovious one to use anstead of using es6 class

// but we have some down sides like this one
/*
class Animal {
  //if we create a method function this is compiled down into the prototype of Animal and all insteances are going to have the same one function in the proptotype
  eat() {}
  //but we have an arrow function the problem is here when its compiled down the function is going to be appended in each instance create which lides to a performance issue 🥵🥵🥵
  sleep = () => {};
}
function Animal() {
  this.sleep = function () {};
}
Animal.prototype.eat = function () {};

the question that you need to answer is if the developper experience you gain from class field out way the petentionall performance if yes than go with class field

/another aspec in class field is private value

class Car {
  //according to class field to decalre a private varaible you can do it by adding hashtag or poundsing if someone if you do #varaible you can get rid of this keyword
  //this.#milesDriven===#milesDriven
  //also you can add private static methods and private method

  #milesDriven = 0;
  drive(distance) {
    this.#milesDriven = distance;
  }
  #getMileDriven() {
    return this.#milesDriven;
  }
}

const tesla = new Car();
tesla.drive(34);
console.log(tesla.#getMileDriven()); //SyntaxError: Private field '#getMileDriven' must be declared in an enclosing class
*/
