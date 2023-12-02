// 다음 큰 숫자
// n의 다음 큰 숫자는 n보다 큰 자연수
// n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같음
// n의 다음 큼 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수

// 2진수로 리턴해서 1의 갯수를 리턴해주는 함수
// n+1초기값으로 1씩 증가하면서 1의 갯수가 같은 놈이 다음 큰 숫자

function solution(n) {
  let init = n + 1;

  const returnCnt = (n) => {
    let temp = '',
      binary = '';
    while (n) {
      temp += n % 2;
      n = Math.floor(n / 2);
    }
    binary = temp.split('').reverse();
    return binary.filter((char) => char === '1').length;
  };

  while (returnCnt(n) !== returnCnt(init)) init++;
  return init;
}
console.log(solution(78));

// 다른 사람 풀이
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

// n.toString(2) : 숫자 n을 이진수로 변환
// .match(/1/g).length : 이진수에서 1에 해당하는 것들을 찾아 갯수
// 즉 n이랑 a(n+1)이랑 비교해보고 같으면 a 반환하면 되고,
// 다르면 재귀함수로 a++ 해서 반복하면 됨.
