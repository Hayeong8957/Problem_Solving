/**
 * 문제 :
 * 0보다 크거나 같은 정수 N이 주어진다. 이때 N!을 출력하는 프로그램을 작성하시오.
 *
 * 입력 :
 * 첫째 줄에 정수 N(0<=N<=12)이 주어진다.
 *
 * ex1) 10
 *
 * ex2) 0
 *
 * 출력 :
 * 첫째 줄에 N!을 출력한다.
 *
 * ex1) 3628800
 *
 * ex2) 1
 * */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input);

const factorial = (N) => {
  if (N === 0) {
    return 1;
  } else if (N < 2) {
    return N;
  } else return factorial(N - 1) * N;
};

console.log(factorial(N));
