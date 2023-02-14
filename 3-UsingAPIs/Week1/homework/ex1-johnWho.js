'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-1-john-who

Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/
const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
        return;
      }

      const fullName = `${firstName} Doe`;

      resolve(fullName);
    }, 1000);
  });
};

function main() {
  getAnonName('John').then(console.log).catch(console.log);
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
