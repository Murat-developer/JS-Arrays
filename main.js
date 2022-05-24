// Mappping an Array

const numbers = [1, -1, 2, 3];

const number = numbers.filter((value) => value >= 0);

const mapping = numbers.map((value) => ({ value: value }));

console.log(mapping);
