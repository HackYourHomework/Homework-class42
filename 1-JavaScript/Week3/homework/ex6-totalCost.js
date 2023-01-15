'use strict';

const cartForParty = {
  champagne: 5.0,
  whiskey: 13.0,
  wine: 3.5,
  vodka: 6.5,
  beer: 2.0,
};

/*function calculateTotalPrice(cartItems) {
  let totalPrice = 0;
  for(const item in cartItems{
    totalPrice +=cartItems[item];
  }
  return `Total: € ${totalPrice}`;
  
}
*/

// got rid of for in loop (commented above)
function calculateTotalPrice(cartItems) {
  let totalPrice = 0;
  Object.values(cartItems).forEach((item) => {
    totalPrice += item;
  });
  return `Total: € ${totalPrice}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  calculateTotalPrice(cartForParty);
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expectedResult = `Total: € 30`;
  const totalPriceString = calculateTotalPrice(cartForParty);
  console.assert(totalPriceString === expectedResult);
}

function test() {
  test1();
  test2();
}

test();
