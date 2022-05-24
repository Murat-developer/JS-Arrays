// Spread Operator

const first = [1, 2, 3];
const second = [6, 7, 8];

const combined = [...first, 'b', ...second, 'a'];

const copy = [...combined];

console.log(combined);
console.log(copy);
