const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [ND, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, D] = ND.split(' ').map(Number);
const gifts = input.map((str) => str.split(' ').map(Number));

gifts.sort((a, b) => a[0] - b[0]);

let max = 0;
let cur = 0;
let left = 0;

for (let right = 0; right < N; right++) {
  cur += gifts[right][1];
  while (gifts[right][0] - gifts[left][0] >= D) {
    cur -= gifts[left][1];
    left++;
  }

  max = Math.max(max, cur);
}

console.log(max);
