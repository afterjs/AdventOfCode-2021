var fs = require('fs');

var data = fs.readFileSync('puzzle.txt', 'utf8');
var numbers = data.split('\n');

var previous = 0;
var current = 0;
var counter = 0;

for(let i = 0; i< numbers.length; i++){
    if((i + 3) <= numbers.length) {
        current = parseInt(numbers[i]) + parseInt(numbers[i+1]) + parseInt(numbers[i+2]) + parseInt(numbers[i+3]);
        if(current > previous){
            counter++
        }
        previous = current
    }
}

console.log(counter);
