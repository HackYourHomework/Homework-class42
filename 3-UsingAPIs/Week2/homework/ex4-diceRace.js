'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const dice = [1, 2, 3, 4, 5];
  return Promise.race(dice.map(rollDie));
}

async function main() {
  try {
    const results = await rollDice();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;


// The reason for getting some answers even after the promise resolve is that : rollDie is working asynchronously and will finish the work asked before the promise  resolved 