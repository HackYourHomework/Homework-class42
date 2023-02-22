/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-5-throw-dice-sequentially

In the previous exercise we used `Promise.all()` to throw five dice in one go.
In the current exercise we will be throwing five dice one at a time, waiting 
for a die to settle before throwing the next one. Of course, we still consider 
a die rolling off the table to be a showstopper.

To throw the dice sequentially we will be using a _promise chain_. Your job is 
to expand the given promise chain to include five dice.
------------------------------------------------------------------------------*/

// The line below makes the rollDie() function available to this file.
// Do not change or remove it.
const rollDie = require('../../helpers/pokerDiceRoller');


function rollASingleDie(result, dieNumber) {
  return rollDie(dieNumber).then((value) => {
    result.push(value)
  })
}

function rollDice() {

  const results = []

 return rollASingleDie(results, 1)
 .then(() => rollASingleDie(results, 2))
 .then(() => rollASingleDie(results, 3))
 .then(() => rollASingleDie(results, 4))
 .then(() => rollASingleDie(results, 5))
 .then(() => results)

}


function main() {
  rollDice()
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}


// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
