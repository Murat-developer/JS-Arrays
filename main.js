// Exercise - 4 Moving an Element

const numbers = [1, 2, 3, 4];

console.log(move(numbers, 1, 2));

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
