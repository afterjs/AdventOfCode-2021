var fs = require("fs");

//file read
fs.readFile("puzzle.txt", "utf8", function (err, data) {
  if (err) throw err;
  numbers = data.split("\n");

  console.log(`Result of part 1: ${inc(numbers)}`);
  console.log(`Result of part 2: ${sliding(numbers)}`);
});

//day 1 - puzzle 1
let inc = (numbers) => {
  counter = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (parseInt(numbers[i]) > parseInt(numbers[i - 1])) {
      counter++;
    }
  }
  return counter;
};

//day 1 - puzzle 2

let sliding = (numbers) => {
  previous = 0;
  current = 0;
  counter = 0;

  previous = parseInt(numbers[1]) + parseInt(numbers[2]) + parseInt(numbers[3]);

  for (let i = 0; i < numbers.length; i++) {
    if (i + 3 <= numbers.length) {
      current = parseInt(numbers[i]) + parseInt(numbers[i + 1]) + parseInt(numbers[i + 2]);

      if (current > previous) counter++;

      previous = current;
    }
  }
  return counter;
};
