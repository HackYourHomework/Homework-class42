'use strict';

const rollDie = require('../../helpers/pokerDiceRoller');

async function rollDieUntil(wantedValue) {
  while(true){
    let value= await rollDie();
    if (value == wantedValue){
      return value
    }
  }
}

async function main() {
  try {
    let results=await rollDieUntil('ACE');
    console.log(`Resolved! ${results}`);
  } catch (error) {
    console.log(`Reject! ${error.message}`);
  }
  
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDieUntil;
