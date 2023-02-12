// s = "aukks", skip = "wbqd", index = 5일 때,
// a에서 5만큼 뒤에 있는 알파벳은 f지만
// [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다.
// 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은
// [c, e, f, g, h] 순서에 의해 'h'가 됩니다.
// 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.

// set 메서드 delete()사용
// skip문자열 하나씩 돌면서 해당 문자 alpha set에서 삭제
// 삭제된 alpha newalpha 배열로 저장
// for s 돌면서 newAlpha에서 해당 문자의 인덱스 + 주어진 인덱스 저장
// newAlpha에서 저장된 idx와 newAlpha의 길이 나머지의 인덱스를 찾아 해당 요소를 answer에 덧붙임
// newAlpha의 길이로 나누는 이유는 idx 더했을 때 z를 넘어가면 a로 돌아가기 때문에

function solution(s, skip, index) {
  let answer = '';
  let alpha = new Set('abcdefghijklmnopqrstuvwxyz');
  [...skip].forEach((x) => alpha.delete(x));
  let newAlpha = [...alpha];

  for (let i = 0; i < s.length; i++) {
    let idx = newAlpha.indexOf(s[i]) + index;
    answer += newAlpha[idx % newAlpha.length];
  }

  return answer;
}

// 다른 사람 풀이
function solution2(s, skip, index) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].filter((c) => !skip.includes(c));
  return s
    .split('')
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join('');
}
// 오.. for문 돌리지 않고 map

// 정규표현식
function solution3(s, skip, index) {
  const able = 'abcdefghijklmnopqrstuvwxyz'.replace(
    new RegExp(skip.split('').join('|'), 'g'),
    '',
  );
  return s
    .split('')
    .map((e) => able[(able.indexOf(e) + index) % able.length])
    .join('');
}
