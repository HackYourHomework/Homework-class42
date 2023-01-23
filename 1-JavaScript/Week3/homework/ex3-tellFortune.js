'use strict';

function selectRandomly(array) {
  return array[Math.floor(Math.random() * 5)];
}

function tellFortune(array1, array2, array3, array4) {
  const numKids = selectRandomly(array1);
  const partnerName = selectRandomly(array2);
  const location = selectRandomly(array3);
  const jobTitle = selectRandomly(array4);
  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKids} kids.`;
}

function main() {
  const numKids = [0, 1, 2, 3, 4];

  const partnerNames = ['Dmitri', 'Alex', 'Serge', 'Seb', 'Buddy'];

  const locations = ['Ams', 'Kiev', 'Berlin', 'NY', 'Barca'];

  const jobTitles = ['FD', 'QA', 'BD', 'FSD', 'dog walker'];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = tellFortune;
