/**
 * 문제 : 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다.
 * 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
 * aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
 * 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
 *
 * 입력 :
 * 첫째 줄에 단어의 개수 N이 들어온다. N은 100보다 작거나 같은 자연수이다.
 * 둘째 줄부터 N개의 줄에 단어가 들어온다.
 * 단어는 알파벳 소문자로만 되어있고 중복되지 않으며, 길이는 최대 100이다.
 * ex1)
 * 3
 * happy
 * new
 * year
 *
 * ex2)
 * 4
 * aba
 * abab
 * abcabc
 * a
 *
 * ex3)
 * 5
 * ab
 * aa
 * aca
 * ba
 * bb
 *
 * ex4)
 * 2
 * yzyzy
 * zyzyz
 *
 * ex5)
 * 1
 * z
 *
 *
 * 출력 : 첫째 줄에 그룹 단어의 개수를 출력한다.
 * ex1)
 * 3
 *
 * ex2)
 * 1
 *
 * ex3)
 * 4
 *
 * ex4)
 * 0
 *
 * ex5)
 * 1
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = 0;

for (let i = 1; i <= input[0]; i++) {
  let obj = {};
  let torf = true;
  for (let j = 0; j < input[i].length; j++) {
    if (!obj[input[i][j]]) {
      obj[input[i][j]] = 1;
    } else {
      if (input[i][j] === input[i][j - 1]) obj[input[i][j]]++;
      else {
        torf = false;
        break;
      }
    }
  }
  if (torf) result++;
}

console.log(result);


// 다시 풀었을 때 0501
// 백준 1316 그룹 단어 체커
// 이미 나온 문자가 연속해서 나오는 것이 아니라 
// 다른 문자가 나온 뒤에 또 나오게 된다면
// 그건 그룹 단어가 아니다.
// "/dev/stdin"

// const input = require("fs").readFileSync("test2.txt").toString().split('\n')

function solution(input) {
  const [N, ...arr] = input;
  let cnt = N;
  

  arr.forEach(str => {
    const stack = [];
    const map = new Map();

    for(let i = 0; i < str.length; i++) {
      if(str[i] === stack[stack.length - 1]) continue;
      stack.push(str[i])
    }
    console.log('stack >> ', stack)
    for(let j = 0; j < stack.length; j++){
      map.set(stack[j], (map.get(stack[j]) || 0) + 1);
      for(const [_, value] of map) {
        if(value >= 2) {
          cnt--;
          return;
        } 
      }
    }
    console.log('map >> ', map)
  });

  return cnt;
}

console.log(solution(input));

