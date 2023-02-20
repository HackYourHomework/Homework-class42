'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-4-dice-race

1. Complete the function `rollDice()` by using `.map()` on the `dice` array 
   to create an array of promises for use with `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dice continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  const promises = dice.map(() => rollDie());
  return Promise.race(promises);
}

async function main() {
  try {
    const result = await rollDice();
    console.log('resolved!', result);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// When Promise.race() resolves, it immediately returns the value of the first promise that settles (either resolved or rejected). However, the other promises that are still pending are not canceled and will continue to run until they either resolve or reject. In this case, the rollDie() function generates a random number between 1 and 6 and returns a promise that resolves after a random delay. If the promise doesn't settle before Promise.race() resolves, the function will continue to run until the promise is settled.
