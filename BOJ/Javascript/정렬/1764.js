/**
 * 문제: 김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 
 * 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.
 * 
 * 입력: 첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다.
 * 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다.
 * 이름은 띄어쓰기 없이 알파벳 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.
 * 듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.
 * 
 * 출력: 듣보잡의 수와 그 명단을 사전순으로 출력한다.
 * 
 * 예제 입력: 
3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton

예제 출력:
2
baesangwook
ohhenrie

풀이: 교집합 구하기?
set으로 교집합 구하고나서 list로 변경

Set.prototype.intersection = function (set) {
  return new Set([...this].filter(v => set.has(v)));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 교집합
console.log(setA.intersection(setB)); // Set(2) {2, 4}
// setB와 setA의 교집합
console.log(setB.intersection(setA)); // Set(2) {2, 4}
 */
let [NM, ...names] = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .split('\n');
let [N, M] = NM.split(' ').map(Number);
const N_list = new Set(names.slice(0, N).sort());
const M_list = new Set(names.slice(N).sort());
const intersection = new Set([...N_list].filter((x) => M_list.has(x)));
console.log(intersection.size);
console.log([...intersection].join('\n'));
