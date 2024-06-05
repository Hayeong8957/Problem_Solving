const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input.map(item => item.split(' ').map(Number))

let stack = [];
let minDiff = Infinity;

for(let i = 1; i <= N; i++) {
  combination(i, 0);
}

function combination(chance, index) {
  if(chance == 0) {
    const diff = calcDiff(stack);
    minDiff = Math.min(minDiff, diff)
    return;
  }
  for(let i = index; i < N; i++) {
    stack.push(arr[i]);
    combination(chance - 1, i + 1)
    stack.pop();
  }

}

function calcDiff(set) {
  let 신맛total = 1
  let 쓴맛total = 0;
  for(const [신맛, 쓴맛] of set) {
    신맛total *= 신맛
    쓴맛total += 쓴맛
  }
  return Math.abs(신맛total - 쓴맛total)
}

console.log(minDiff)