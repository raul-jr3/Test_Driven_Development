const move_neg = require('./move_neg_end');

test("moves the negative numbers in an array to the end", () => {
  expect(move_neg([1, -2, -4, 2, 3, 4, -3], 7)).toEqual([1, 2, 3, 4, -2, -4, -3]);
});
