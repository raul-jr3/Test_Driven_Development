const {addition, sub, divide} = require('./math');

test('adds two numbers', () => {
  expect(addition(1, 2)).toBe(3);
});


test("subtracts two numbers", () => {
  expect(sub(3, 2)).toBe(1);
});

test("divides two numbers", () => {
  expect(divide(6, 3)).toBe(2);
});
