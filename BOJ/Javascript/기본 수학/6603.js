const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const output = [];
let numbers = Array(6);

for (let i = 0; i < input.length; i++) {
  const [K, ...S] = input[i];
  if (K === 0) break;

  recursion(0, 0, S);
  output.push('');
}

function recursion(start, length, S) {
  if (length === 6) {
    output.push(numbers.join(' '));
    return;
  }

  for (let i = start; i < S.length; i++) {
    numbers[length] = S[i];
    recursion(i + 1, length + 1, S);
  }
}

console.log(output.join('\n').trim());
