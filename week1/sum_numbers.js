// CUSTOMIZE THE NUMBER OF LINES YOU RECEIVE
const limitLines = 1;
const customFunction = (lines) => {
  const numbers = lines[0].split(' ');
  console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let numLine = 0;
const lines = [];

rl.on('line', function (line) {
  numLine = numLine + 1;
  lines.push(line);
  if(numLine === limitLines) {
    customFunction(lines);
    process.exit(0);
  }
});