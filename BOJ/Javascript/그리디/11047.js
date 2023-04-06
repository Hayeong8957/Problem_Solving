/** 동전 0
 * 문제: 준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 
 * 이때 필요한 동전 개수의 최솟값을 구하는 프로그램 작성
 * 
 * 입력: 첫째 줄에 N과 K, 
 * 둘째 줄부터 N개의 줄에 동전의 가치 A가 오름차순으로 주어진다.
 * 
 * 출력: 첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력
 * 
예제 입력:
10 4200
1
5
10
50
100
500
1000
5000
10000
50000

예제 출력:
6

풀이: 그리디 대표 문제 동전,,
가장 큰 화폐 단위부터 돈을 거슬러 주는 것이 최적의 해를 보장함
-> 가지고 있는 동전 중에서 큰 단위는 항상 작은 단위의 배수이므로
 */
let [NK, ...temp] = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .trim()
  .split('\n');

let [N, K] = NK.split(' ').map(Number);
let coins = temp.map(Number);
let count = 0;

for (let i = N - 1; i >= 0; i--) {
  count += parseInt(K / coins[i]);
  K %= coins[i];
}

console.log(count);
