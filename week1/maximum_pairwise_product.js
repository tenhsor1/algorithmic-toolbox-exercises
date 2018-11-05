// CUSTOMIZE THE NUMBER OF LINES YOU RECEIVE
const limitLines = 2;
const customFunction = (lines) => {
  const n = parseInt(lines[0]);
  const seq = lines[1].split(' ').map(Number);
  const firstMax = Math.max(...seq);
  const indexFirstMax = seq.indexOf(firstMax);
  seq.splice(indexFirstMax, 1);
  const secondMax = Math.max(...seq);
  console.log(firstMax * secondMax);
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