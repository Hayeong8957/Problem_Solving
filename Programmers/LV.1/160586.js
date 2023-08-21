// 대충 만든 자판
// 1번키부터 차례대로 할당된 문자들이 순서대로 담긴 문자열배열 keymap과 입력하려는 문자열들이 담긴 문자열배열 targets가 주어질 때,
// 각 문자열을 작성하기 위해 키를 최소 몇 번씩 눌러야 하는지 순서대로 배열에 담아 return하는 solution 함수
// targets를 돌면서 keymap에 있는 문자열들을 동시에 돌면서 해당 문자가 있는 인덱스를 리턴 -> Math.min()으로 최소값 -> 최소값 저장해두는 temp값+
// keymap의 길이만큼 table 동적 배열을 생성 -> keymap에 target의 요소가 있는 index를 table 배열에 저장

function solution(keymap, targets) {
  const table = Array(keymap.length).fill(0);
  var answer = [];

  for (const target of targets) {
    let sumTemp = 0; // 가장 적은 값들의 합

    for (let i = 0; i < target.length; i++) {
      for (let j = 0; j < keymap.length; j++) {
        if (keymap[j].includes(target[i])) {
          table[j] = keymap[j].indexOf(target[i]);
        } else table[j] = Infinity;
      }
      sumTemp += Math.min(...table) + 1;
    }
    if (sumTemp < Infinity) answer.push(sumTemp);
    else answer.push(-1);
  }
  return answer;
}

console.log('answer', solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
