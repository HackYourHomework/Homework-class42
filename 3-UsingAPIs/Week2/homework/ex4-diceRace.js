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
  const arrayForPromise = dice.map(value=>rollDie(value));
  return Promise.race(arrayForPromise);
}

async function main() {
  try{
    const results = await rollDice();
    console.log('Resolved!', results)
  }catch(error){
    console.log('Rejected!', error.message)
  }
  await rollDice();
}

/* With Promise.all() it is possible to both end all waiting processes and do this using promises.
    Promise.race() on the other hand, as the name suggests, is the race of promises in the array.
     The first word to reach the future promised times (desired value or error message) is the winner of the race. 
     However, even if the winner of the race is clear, other words continue to work.*/

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
