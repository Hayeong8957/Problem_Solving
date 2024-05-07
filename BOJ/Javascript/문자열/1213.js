// 팰린드롬 만들기
// 모든 문자의 빈도가 짝수이거나, 하나의 문자만 홀수 빈도
// 홀수 빈도를 가진 문자 존재 -> 그 문자는 펠린드롭의 정 중 앙!
// 홀수 빈도문자가 2개 이상이면, 암쏘리 출력

// 절반의 앞부분만 만들고, 홀수 빈도 문자 가운데 넣고, 절반의 앞부분의 리버스 연결 

const input = require("fs").readFileSync("test.txt").toString().trim().split("")

function solution(input){
  const newMap = new Map();
  let odd = 0;
  let middle = ""
  let result = ""

  for(let char of input) {
    newMap.set(char, (newMap.get(char) || 0) + 1);
  }

  for(let [key, value] of newMap) {
    if(value % 2 !== 0 ) {
      odd++;
      middle = key
    }
    if(odd > 1) {
      return "I'm Sorry Hansoo"
    }  
  }


  let half = [];
  [...newMap.keys()].sort((a, b) => a[0].localeCompare(b[0])).forEach(char => {
      for (let i = 0; i < Math.floor(newMap.get(char) / 2); i++) {
          half.push(char);
      }
  });

  result = half.join('') + (middle || '') + half.reverse().join('');
  return result;

}

console.log(solution(input))