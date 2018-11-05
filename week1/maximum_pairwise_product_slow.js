// CUSTOMIZE THE NUMBER OF LINES YOU RECEIVE
const limitLines = 2;
const customFunctionSlow = (lines) => {
  const n = parseInt(lines[0]);
  const seq = lines[1].split(' ').map(Number);
  products = [];
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      products.push(seq[i] * seq[j]);
    }
  }
  // console.log(Math.max(...products));
  return (Math.max(...products));
  // const firstMax = Math.max(...seq);
  // const indexFirstMax = seq.indexOf(firstMax);
  // seq.splice(indexFirstMax, 1);
  // const secondMax = Math.max(...seq);
  // console.log(firstMax * secondMax);
}

const customFunction = (lines) => {
  const n = parseInt(lines[0]);
  const seq = lines[1].split(' ').map(Number);
  const firstMax = Math.max(...seq);
  const indexFirstMax = seq.indexOf(firstMax);
  seq.splice(indexFirstMax, 1);
  const secondMax = Math.max(...seq);
  // console.log(firstMax * secondMax);
  return firstMax * secondMax
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
    while(true) {
      const length = 100000;
      const numbers = Array.from({length}, () => Math.floor(Math.random() * 40000)).join(' ');
      const resSlow = customFunctionSlow([length, numbers]);
      const res = customFunction([length, numbers]);
      if(resSlow !== res) {
        console.log(numbers);
        console.log(res, resSlow);
        break;
      }
    }
    // customFunction(lines);
    process.exit(0);
  }
});