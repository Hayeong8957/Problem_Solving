/**
 * 입력:
 * 3
 * ADJFOE
 * O
 * AB
 *
 * 출력:
 * AE
 * OO
 * AB
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift(); // 한 칸 앞으로 당김

for (let x of input) {
  console.log(x[0] + x[x.length - 1]);
}
