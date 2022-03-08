//there is two type of callback function

// there is  callback  function how manipulate and make some abstaraction  and transform value and do something with value

//and there is callback function used we can delay excution of function until some particule event happend

// api.github.com/users/id(username)
// yahooo weather api

//promises
//pending is the default ,initial state .when they give you the buwwer it's in thes state

//fulfilled is the state the buzzeer is in when it's flashing and you table is ready

//rejected id the state the buzzer is in when something goes wrong ,Myby the restauerant is about to close or they forgot someone reted out the restaurant for the night

//How do you create a Promise ?
// How do you change the status of a promise?
//HOw do you listen for when the status of a promise changes?

const promise = new Promise((resolve, reject) => {
  // when change the status of the promise by calling resolve or reject (reject change  the status of the promise)
  // and resolve (resolve change the status of the promise )

  setTimeout(() => {
    reject();
  }, 1000);
});
// console.log(promise);
//promise is an Object and prototype of Promise is then catch finally
//the status of  promise   change when we call resolve to fullfiled so what eveer function in the then(fn) it going to be invoked
//the status of  promise   change when we call reject to reject so what eveer function in the catch(fn) it will be called

function successFn() {
  console.log("Success 🎉");
}
function errorFn() {
  console.log("💢💢💢error 💢");
}
promise.then(successFn).catch(errorFn);

//async function is do two thing are its return promise and we can use and await or pause a function until the promise result in the await keyword and after it will continue and excution

async function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ error: "please add and ID " });
    }, 1000);
  });
}

document.addEventListener("click", async (e) => {
  try {
    const user = await getUser(34);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
});
