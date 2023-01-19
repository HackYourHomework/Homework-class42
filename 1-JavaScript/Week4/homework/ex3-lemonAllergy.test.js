'use strict';

const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(initialBasket, dangerousFruit) {
  const myHarmlessBasket = [...initialBasket].filter(
    (fruit) => fruit !== dangerousFruit
  );
  return myHarmlessBasket;
}

// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(originalFruitBasketContents).toEqual(fruitBasket);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    const newArray = sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(newArray.includes('lemon')).toBe(false);
  });
});
