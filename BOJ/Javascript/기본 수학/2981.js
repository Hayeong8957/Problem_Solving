const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt',
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [N, ...arr] = input;

function gcd(a, b) {
  while (b !== 0) {
    const mod = a % b;
    a = b;
    b = mod;
  }
  return a;
}

function gcdMultiple(arr) {
  return arr.reduce((acc, cur) => gcd(acc, cur));
}

function findDivisors(M) {
  const temp = [];
  for (let i = 2; i <= Math.sqrt(M); i++) {
    if (M % i === 0) {
      temp.push(i);
      if (i !== M / i) temp.push(M / i);
    }
  }
  temp.push(M);
  return temp.sort((a, b) => a - b);
}

function findM(arr) {
  const diffs = arr.slice(1).map((num, i) => Math.abs(num - arr[i]));
  console.log('diff >> ', diffs);
  const gcdValue = gcdMultiple(diffs);
  return findDivisors(gcdValue);
}

console.log(findM(arr).join(' '));
