// 비밀번호는 숫자 4개를 사용한다. 숫자는 0~9를 사용한다. 같은 숫자를 3개 이상 사용하면 안된다.
// 고객의 전화번호에서 숫자 4개를 선택해 원래 순서를 유지하며 이어 붙인 결과가 비밀번호와 같지 않아야 한다. 전화번호는 시작번호 010을 제외한 나머지 8자리를 사용한다.
// 고객의 생년월일에서 숫자 4개를 선택해 원래 순서를 유지하며 이어 붙인 결과가 비밀번호와 같지 ㅇ낳아야 한다. 생년월일은 YYYYMMDD형식을 사용한다.
// 고객의 전화번호를 나타내는 문자열, 생년월일을 나타내는 문자열이 매개변수로 주어질 때, 0000~9999까지의 숫자 조합 중 비밀번호로 사용 가능한 조합은 총 몇 가지인지 return하는 solution 함수를 완성하라.
// phone_number는 "(010)XXXXXXXX"형태의 문자열이다. X에는 0부터 9까지의 숫자가 들어간다.
// birthday는 "YYYYMMDD"형태의 문자열이다.

// [입출력 예시]
// input: "(010)54662345", "20010923", output: 9545
// input: "(010)11111111", "20020111", output: 9619
// input: "(010)12345678", "19990909", output: 9550

function getCombinations(str, start = 0, current = '', count = 0) {
  if (count === 4) {
    return [current];
  }
  if (start === str.length) return [];
  return [
    ...getCombinations(str, start + 1, current + str[start], count + 1),
    ...getCombinations(str, start + 1, current, count),
  ];
}

function isValidPassword(password, invalidComb) {
  let freq = Array(10).fill(0);
  for (let digit of password) {
    freq[parseInt(digit, 10)]++;
    if (freq[parseInt(digit, 10)] >= 3) {
      return false;
    }
  }
  return !invalidComb.has(password);
}

function solution(phone_number, birthday) {
  let phoneCombs = new Set(getCombinations(phone_number.slice(5)));
  let birthCombs = new Set(getCombinations(birthday));

  let invalidCombinations = new Set([...phoneCombs, ...birthCombs]);

  let count = 0;
  for (let i = 0; i <= 9999; i++) {
    let password = String(i).padStart(4, '0');
    if (isValidPassword(password, invalidCombinations)) {
      count++;
    }
  }
  return count;
}

console.log(solution('(010)54662345', '20010923')); // 9545
console.log(solution('(010)11111111', '20020111')); // 9619
console.log(solution('(010)12345678', '19990909')); // 9550
