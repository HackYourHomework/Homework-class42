
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return Promise.all(dice.map(rollDie))
  
}

function main() {
  rollDice()
}
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;

// Promise.all returns a single Promise that resolves when all of the promises passed as an iterable.
