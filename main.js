// Combining and Slicing Arrays

const first = [{ id: 2 }];

const second = [6, 7, 8];

const combined = first.concat(second);
first[0].id = 10;

const items = combined.slice(1, 3);

console.log(combined);

console.log(items);
