// // Sorting Arrays

// const numbers = [6, 7, 8, 9, 0];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'javascript' },
];

const course = courses.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(course);
