// 비슷한 단어
// 패턴생성 -> 패턴 비교
// abcda -> 12341 -> 있는 글자면 그 숫자 그대로, 없는 글자면 ++


const fs = require('fs');
let [_, ...arr] = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split('\n');

let patternList = []

for(let word of arr) {
  let pattern = []
  let map = new Map();
  let index = 0;
  for(let char of word) {
    if(!map.has(char)) {
      map.set(char, index++);
    }
    pattern.push(map.get(char));
  }
  patternList.push(pattern.join(''));
}

let answer = 0
const patternMap = new Map();
for(let pattern of patternList) {
  if(patternMap.has(pattern)) {
    answer += patternMap.get(pattern);
    patternMap.set(pattern, patternMap.get(pattern) + 1);
  }else{
    patternMap.set(pattern, 1);
  }
}

console.log(answer);