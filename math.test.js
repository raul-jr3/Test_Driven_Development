const {addition, sub, divide, multiply, maximum, minimum, len, addArray, subArray, maxNum, minNum} = require('./math');

test('adds two numbers', () => {
  expect(addition(1, 2)).toBe(3);
});


test("subtracts two numbers", () => {
  expect(sub(3, 2)).toBe(1);
});

test("divides two numbers", () => {
  expect(divide(6, 3)).toBe(2);
});

test("multiplies two numbers", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("gives the maximum out of two numbers", () => {
  expect(maximum(4, 5)).toBe(5);
});

test("gives the minimum out of two numbers", () => {
  expect(minimum(4, 5)).toBe(4);
});

test("calculates the length of an array", () => {
  expect(len([1, 2, 3])).toBe(3);
});

test("calculates the sum of two arrays", () => {
  expect(addArray([1, 6, 15], [1, 25, 3])).toEqual([2, 31, 18]);
});

test("subtracts two arrays", () => {
  expect(subArray([12, 13, 14], [1, 1, 1])).toEqual([11, 12, 13]);
});


test("finds the maximum number in an array", () => {
  expect(maxNum([23, 12, 54, 658, 67])).toBe(658);
});

test("finds the minimum number in an array", () => {
  expect(minNum([23, 12, 54, 658, 67])).toBe(12);
});