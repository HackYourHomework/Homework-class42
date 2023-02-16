'use strict';

const getAnonName = (firstName = '') => {
  return new Promise((resolve, reject) => {
    if (firstName != '') {
      resolve(`${firstName} Doe`);
    } else {
      reject(new Error("You didn't pass in a first name!"));
    }
  });
};

function main() {
  getAnonName('john')
    .then((value) => {
      console.log(value);
    })
    .catch((value) => {
      console.log(value.message);
    });
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
module.exports = getAnonName;
