'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/3-UsingAPIs/Week1#exercise-3-roll-a-die

- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDie()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDie()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

const rollDie=()=>{
  return new Promise((resolve,reject)=>{
    
      // Compute a random number of rolls (3-10) that the die MUST complete
  const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
  console.log(`Die scheduled for ${randomRollsToDo} rolls...`);

  const rollOnce = (roll) => {
    // Compute a random die value for the current roll
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(`Die value is now: ${value}`);

    // Use callback to notify that the die rolled off the table after 6 rolls
    if (roll > 6) {
      // TODO replace "error" callback
      reject(new Error('Oops... Die rolled off the table.'));
    }

    // Use callback to communicate the final die value once finished rolling
    if (roll === randomRollsToDo) {
      // TODO replace "success" callback
      resolve(value)
    }

    // Schedule the next roll todo until no more rolls to do
    if (roll < randomRollsToDo) {
      setTimeout(() => rollOnce(roll + 1), 500);
    }
  };

  // Start the initial roll
  rollOnce(1);
    
  })
}

function main() {
  // TODO Refactor to use promise
  rollDie().then((value)=>{
    console.log(`Success! Die settled on ${value}.`);
  }).catch((error)=>{
    console.log(error.message);
  })
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = rollDie;



// After I refactored the code to use promises the problem still occurs but not the exact same. The reject value was set at first and not updated, That's because the resolve and reject functions must be called once when the state changed and any further calls would be ignored.