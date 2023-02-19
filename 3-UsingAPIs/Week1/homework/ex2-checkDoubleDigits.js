'use strict';
function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if(number >= 10 && number <= 99){
      resolve('This is a double digit number!');
    } else {
      reject(new Error(`Expected a double digit number but got ${number}`))
    }

  })
}

function main() {
  checkDoubleDigits(9) // should reject
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(10) // should resolve
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(99) // should resolve
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));

  checkDoubleDigits(100) // should reject
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = checkDoubleDigits;
