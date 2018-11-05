// CUSTOMIZE THE NUMBER OF LINES YOU RECEIVE
const limitLines = 2;
const customFunction = (lines) => {
  const n = parseInt(lines[0]);
  const seq = lines[1].split(' ').map(Number);
  // const firstMax = Math.max(...seq);
  // const indexFirstMax = seq.indexOf(firstMax);
  // seq.splice(indexFirstMax, 1);
  // const secondMax = Math.max(...seq);
  let firstMaxIndex = 0;
  for(let i = 0; i < n; i++) {
    if(seq[i] > seq[firstMaxIndex]) {
      firstMaxIndex = i;
    }
  }
  let secondMaxIndex = -1;
  for(let i = 0; i < seq.length; i++) {
    if(i !== firstMaxIndex) {
      if(secondMaxIndex === -1 || seq[i] > seq[secondMaxIndex]) {
        secondMaxIndex = i;
      }
    }
  }
  console.log(seq[firstMaxIndex] * seq[secondMaxIndex]);
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