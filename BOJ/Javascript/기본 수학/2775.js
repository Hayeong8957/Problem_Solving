/**
 * 문제 : 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.
 * 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.
 * 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.
 * 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
 *
 * 입력 : 첫 번째 줄에 Test case의 수 T가 주어진다.
 * 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다
 *
 * ex1)
 * 2
 * 1
 * 3
 * 2
 * 3
 *
 * 출력 : 각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.
 * ex1)
 * 6
 * 10
 *
 * 제한 : 1 ≤ k, n ≤ 14
 *
 * 풀이 : 1. 0을은 i호에 i명만큼 살기 때문에 n호만큼 0층을 설정해준다.
 * 2. k층 n호에는 k-1층 1호 ~ n호의 인원수만큼 사는데,
 * k-1층 1호 ~ n-1호의 인원수는 k층 n-1호의 인원수와 같다.
 * 따라서 k층 n호의 인원수는 k층 n-1호 + k-1층 n호를 해주면 된다.
 * 3. 외부 forloop에서 배열을 항상 [1]부터 시작하도록 초기화해준다.
 * 내부 forloop에서는 가장 아래 행이면 1씩 증가하도록 if조건문을 걸어주고,
 * 그 외 경우는 위의 [a행, b-1열]+[a-1행, b열]패턴에 맞도록 값을 저장해준다.
 * 그리고 마지막에 알고 싶은 층과 호수를 배열의 인덱스에 넣고 찾아주면 된다.
 *  */

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));
const T = input.shift();

for (let i = 0; i < T; i++) {
  const a = input.shift();
  const b = input.shift();
  const apartment = [];

  for (let i = 0; i <= a; i++) {
    apartment.push([1]);
    for (let j = 1; j < b; j++) {
      if (i === 0) {
        apartment[i].push(j + 1);
      } else {
        apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
      }
    }
  }

  const floor = a;
  const room = b - 1;
  console.log(apartment[floor][room]);
}
