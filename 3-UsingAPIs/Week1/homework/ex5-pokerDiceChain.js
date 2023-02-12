
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];
  return rollDie(1)
    .then((value) => {
      results.push(value);
      return rollDie(2);
    })
    .then((value) => {
      results.push(value);
      return rollDie(3);
    })
    .then((value) => {
      results.push(value);
      return rollDie(4);
    })
    .then((value) => {
      results.push(value);
      return rollDie(5);
    })
    .then((value) => {
      results.push(value);
      return results;
    })
}

function main() {
  Promise.all(rollDice())
    .then((results) => console.log('Resolved!', results))
    .catch((error) => console.log('Rejected!', error.message));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDice;
