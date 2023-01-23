'use strict';

function giveCompliment(name) {
  const compliments = [
    'good',
    'great',
    'awesome',
    'amazing',
    'wonderful',
    'magnificent',
    'stunning',
    'breathtaking',
    'gorgeous',
    'incomparable',
  ];
  const randomComplimentIndex = Math.round(Math.random() * 9);
  const randomCompliment = compliments[randomComplimentIndex];
  return `You are ${randomCompliment}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'DK';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = giveCompliment;
