// K진수에서 소수 개수 구하기 > 2022 kakao 코테
// 1. 진법 변환
// 2. 변환된 숫자를 0으로 구분하면 ?
// 3. 0이면 해당 temp 숫자를 10진수로 바꾼 뒤, 소수 판별하셈
// 4. 소수 판별 true일 시 cnt++
// 2~4 반복 (n이 K진법으로 바뀌었을 때 K진법 문자열의 길이만큼 반복)

// 처음 안 사실 : 10진수.toString(N) => N진수로 변경된다. parseInt가 아니었음

function solution(n, k) {
  const K진수Nums = n.toString(k).split("0");
  let answer = 0;

  for(let i = 0; i < K진수Nums.length; i++) {
    if(K진수Nums[i] === "") continue;
    if(isPrime(parseInt(K진수Nums[i], 10))) {
      answer++
    } 
  };

  return answer;
}

// 소수 구하기 -> 1과 자기 자신만을 약수로 가짐
// 약수는 짝으로 존재 -> 제곱근까지 순회
function isPrime(num) {
  if(num <= 1) return false
  for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
    if(num % i === 0) return false;
  }
  return true
}

console.log(solution(1111, 10))