//Rest Operator Vs Spread Operator

function logGreating(...greating) {
  // greating is a valid array
  for (const great of greating) {
    console.log(great);
  }
}

logGreating("hello", "hola", "hi", "hey");
/*
🚩 rest operator is a parameter syntax represent  indefinite number of argument as an array
rest is to combine and spread to spilt

spread operator takes an array or string and spilt it to individual element

let's imagine that we have an array form our database and we want to reuse and same function logGreating that alwayse combine all the argument to an array how could we do that ??
*/
function logGreating(...greating) {
  // greating is a valid array
  for (const great of greating) {
    console.log(great);
  }
}
const data = ["hello", "hola", "hi", "hey"];

logGreating(data); //=>   ['hello', 'hola', 'hi', 'hey']  🥶🥶 this is not what we want

logGreating(...data); //== logGreating("hello", "hola", "hi", "hey")

/*
to make that happen we use : 🚩 spread operator that split all element of that array as arguments


that work splendedly 🎉🥳

What is the difference between rest and spread operator 😕 ?
🚩 rest operator is specify in the function declaration to combine argument into a single array

 🚩 spread operator is specify durring the function call to split an array or string to indivudal element

📌 note for spread operator :
we can acheive the same thig with apply method in function call📌

logGreating.apply(null, data); //apply take an array and split all element as arguments
 */
