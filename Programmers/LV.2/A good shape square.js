// 멀쩡한 사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/62048
// 직사각형의 좌상, 우하 꼭짓점을 이었을 때, 대각선을 지나지 않는 정사각형들의 갯수
// 대각선이 지나는 단위정사각형 갯수 공식: W + H - (W, H의 최대 공약수)
// 최대공약수 -> 유클리드 호제법 -> W와 H를 나눈 값의 나머지가 0이 나올 때까지 반복하여 0이 나올 경우 0이 나올 수 있었던 H를 반환하는 행위
// 3%5 = 3
// 5%3 = 2
// 3%2 = 1
// 2%1 = 0

function solution(w, h) {
  let answer;
  const wholeSquare = w * h;
  const cutSquare = w + h - gcd(w, h);
  answer = wholeSquare - cutSquare;

  return answer;
}

function gcd(w, h) {
  const mod = w % h;
  if (mod === 0) return h;
  return gcd(h, mod);
}
