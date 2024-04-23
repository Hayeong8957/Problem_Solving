/**
 * 문자 해독
 * 
 * W를 이루고 있는 g개의 그림문자와, 연구 대상인 벽화에 기록된 마야 문자열 S가 주어졌을 때, 
 * 단어 W가 마야 문자열 S에 들어있을 수 있는 모든 가짓수를 계산하는 프로그램을 작성하시오. 
 * 즉, 문자열  S안에서 문자열 W의 순열 중 하나가 부분 문자열로 들어있는 모든 경우의 수를 계산하라는 뜻이다.
 * 
 * 입력
 * 첫째 줄에 고고학자들이 찾고자 하는 단어 W의 길이 g와 발굴된 벽화에서 추출한 문자열 S의 길이 |S|가 빈 칸을 사이에 두고 주어진다. 
 * (1≤g≤3000,  g≤|S|≤3,000,000) 둘째 줄에 W, 셋째 줄에 S의 실제 내용이 들어있다. 모든 문자열은 알파벳으로 이루어지며, 대소문자를 구분한다.
 * 4 11
 * cAda
 * AbrAcadAbRa
 * 
 * 출력
 * 첫째 줄에 W의 순열이 S 안에 있을 수 있는 형태의 개수를 출력한다.
 * 2
 * 
 */

function solution() {
  let fs = require("fs");
  // let input = fs.readFileSync("/dev/stdin").toString().trim();
  let input = fs.readFileSync('./test.txt').toString().trim().split('\n');

  const [g, S] = input[0].split(" ").map(Number);
  const pattern = input[1]
  const target = input[2]

  let [left, right] = [-1, -1];
  const counts = new Array(123).fill(0)
  const keys = new Set()
  let answer = 0;

  for(let i =0; i<g; i++){
    const code = pattern.charCodeAt(i);
    counts[code]++;
    keys.add(code);
  }

  while(right < S) {
    while(right - left < g) {
      const rcode = target.charCodeAt(++right);
      counts[rcode]--;
    }
    const flag = check();
    if(flag) answer++

    const lcode = target.charCodeAt(++left);
    counts[lcode]++;
  }
  return answer;

  function check() {
    for (const key of keys) {
      if(counts[key] !== 0 ) return false;
    }
    return true;
  }
}

console.log(solution());