// Finding Elements of Reference types

const courses = [
  { id: 1, name: 'John' },
  { id: 2, name: 'William' },
];

const course = courses.find((value) => value.name === 'William');

console.log(course);

const items = courses.findIndex((value) => {
  return value.name === 'William';
});

console.log(items);
