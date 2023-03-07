'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return Promise.race(dice.map(rollDie))
}

async function main() {
  try {
    const result = await rollDice()
    console.log('Resolved!', result)
  } catch (error) {
    console.log('Rejected!', error)
  }

}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

//because .race() returns the first resolved value but doesn't stop other promises execution 