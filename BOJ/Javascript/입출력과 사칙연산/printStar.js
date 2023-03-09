/** 별찍기 ><
 *
 */

// python
// n = int(input());
// for i in range(1, n+1):
//     print("*"*(n-i+1))

// js 별찍기 3탄 - 2440
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);
for (let i = n; i >= 1; i--) {
  console.log('*'.repeat(i));
}

// *****
// ****
// ***
// **
// *

// js 별찍기 4탄 - 2441
let input2 = require('fs').readFileSync('/dev/stdin').toString().trim();
let n2 = Number(input2);
for (let i = n2; i >= 1; i--) {
  let a = ' '.repeat(n2 - i);
  let b = '*'.repeat(i);
  console.log(a + b);
}
// *****
//  ****
//   ***
//    **
//     *

// js 별찍기 5탄 - 2442
let input3 = require('fs').readFileSync('/dev/stdin').toString().trim();
let n3 = Number(input3);
for (let i = 1; i <= n3; i++) {
  let a = ' '.repeat(n3 - i);
  let b = '*'.repeat(i * 2 - 1);

  console.log(a + b);
}

//     *
//    ***
//   *****
//  *******

// js 별찍기 6탄 - 2443
let input4 = require('fs').readFileSync('/dev/stdin').toString().trim();
let n4 = Number(input4);
for (let i = n4; i >= 1; i--) {
  let a = ' '.repeat(n4 - i);
  let b = '*'.repeat(i * 2 - 1);

  console.log(a + b);
}
// *********
//  *******
//   *****
//    ***
//     *

// js 별찍시 7탄 - 2444
let input5 = require('fs').readFileSync('/dev/stdin').toString().trim();
let n5 = Number(input5);

let result = [];
for (let i = 1; i < n5; i++) {
  let a = ' '.repeat(n5 - i);
  let b = '*'.repeat(i * 2 - 1);
  result.push(a + b);
}
for (let i = n5; i >= 1; i--) {
  let a = ' '.repeat(n5 - i);
  let b = '*'.repeat(i * 2 - 1);
  result.push(a + b);
}
console.log(result.join('\n'));

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
