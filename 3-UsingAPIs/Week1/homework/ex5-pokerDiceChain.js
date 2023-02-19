
const rollDie = require('../../helpers/pokerDiceRoller');

function rollDice() {
  const results = [];
  const pushAndRoll = (nextDieNumber) => {
    return (value) => {
      results.push(value);
      return rollDie(nextDieNumber);
    }
  }
  return rollDie(1)
      .then(pushAndRoll(2))
      .then(pushAndRoll(3))
      .then(pushAndRoll(4))
      .then(pushAndRoll(5))
      .then((value) => {
        results.push(value);
        return results;
        })
    ;
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
