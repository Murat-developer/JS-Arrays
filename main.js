// Every and Some Methods
// every() checks to see every element
// some() checks to see at least One element

const numbers = [1, 2, -1, 3, 4];

const atLeastOnePositive = numbers.some((value) => {
  return value >= 0;
});
console.log(atLeastOnePositive);
