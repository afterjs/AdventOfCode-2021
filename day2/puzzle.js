const fs = require('fs');

fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
    let commands = data.split('\n');
    multiplyPosition(commands)
});

let = multiplyPosition = (commands) => {
    horizontal = 0;
    depth = [0, 0];
    aim = 0;
    
    commands.map((command) => {
        commandSplit = command.toString().split(' ');
        cmdStr = commandSplit[0].toString().trim();
        val = parseInt(commandSplit[1]);

        switch (cmdStr) {
            case 'forward':
                horizontal += val
                depth[1] += aim*val;
                break;
            case 'down':
                aim += val;
                depth[0] += val;
                break;
            case 'up':
                aim -= val;
                depth[0] -= val;
        }
    })
    console.log(`Part 1 -> ${horizontal * depth[0]} \nPart 2 -> ${horizontal * depth[1]}`)
}
