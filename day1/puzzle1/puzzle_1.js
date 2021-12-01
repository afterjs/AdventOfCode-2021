var fs = require('fs');

var data = fs.readFileSync('puzzle.txt', 'utf8');
var numbers = data.split('\n');

var counter = 0;

for(let i = 1; i < numbers.length; i++){
  if(parseInt(numbers[i]) > parseInt(numbers[i-1])) {
      counter++;
  } 
}
