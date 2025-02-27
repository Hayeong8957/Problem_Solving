const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [a, b] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 소수, 펠린드롬 check
// 소수 판별 -> 제곱근으로
// function isPrime(n) {
//   if (n < 2) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// 소수 판별 -> 에러토스테네스의 체
function getPrimeList(n) {
  const primes = new Uint8Array(n + 1).fill(1); // Boolean 대신 Uint8Array 사용 (메모리 최적화)
  primes[0] = primes[1] = 0; // 0과 1은 소수가 아님

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = 0;
      }
    }
  }

  return primes;
}

function isPalindrome(n) {
  const str = n.toString();
  return str === str.split('').reverse().join('');
}

const maxB = Math.min(b, 100000000);
const primes = getPrimeList(maxB);
const answer = [];

for (let i = a; i <= maxB; i++) {
  // if (isPalindrome(i) && isPrime(i)) {
  //   console.log(i);
  // }
  if (isPalindrome(i) && primes[i]) {
    answer.push(i);
  }
}
answer.push(-1);
console.log(answer.join('\n'));
