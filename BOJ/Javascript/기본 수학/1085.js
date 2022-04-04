/**
 * 문제 : 한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고,
 * 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다.
 * 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.
 *
 * 제한 :
 * 1 ≤ w, h ≤ 1,000
 * 1 ≤ x ≤ w-1
 * 1 ≤ y ≤ h-1
 * x, y, w, h는 정수
 *
 * 입력 : 첫째 줄에 x, y, w, h가 주어진다.
 *
 * ex1)
 * 6 2 10 3
 *
 * ex2)
 * 1 1 5 5
 *
 * ex3)
 * 653 375 1000 1000
 *
 * ex4)
 * 161 181 762 375
 *
 * 출력 : 첫째 줄에 문제의 정답을 출력한다.
 * ex1) 1
 * ex2) 1
 * ex3) 347
 * ex4) 161
 *
 * 풀이 : 배열 내의 최소값 찾기
 * - Math.min() : 인자로 들어온 값 중에서 가장 작은 값을 반환하는 함수
 * - Function.prototype.apply() : apply()는 인자로 배열(또는 유사 배열 객체)로
 * 제공되는 arguments로 함수를 호출한다.
 * - Math.min.apply(null, 배열)
 *
 * */
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

const counters = [x, y, w - x, h - y];

console.log(Math.min.apply(null, counters));
