// 영어 끝말잇기

// 0. who는 배열 순회하면서 현 idx를 n으로 나눈 값에 + 1, turn은 현 idx를 + 1한 값을 n으로 나눠줘야 나옴
// 1. words 배열을 순회하면서 겹치는 단어가 있는지 -> 겹치는 단어가 있는지 어케 확인함? -> words 배열 순회하면서 stack에 넣음 -> word 현재 단어가 stack 배열에 있는지 확인 -> 있으면 그 사람 누군지, 그 사람의 몇번째 turn인지 리턴
// 2. 이전 단어의 마지막 글자와 현 단어 첫 글자 다른 경우 who, turn 리턴

function solution(n, words) {
  var stack = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let who = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0 && words[i - 1][words[i - 1].length - 1] !== word[0]) {
      // 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다른 경우
      return [who, turn];
    }

    if (stack.includes(word)) {
      // 중복 단어인 경우
      return [who, turn];
    }

    stack.push(word); // 단어를 스택에 추가
  }

  return [0, 0]; // 규칙을 어긴 사람이 없는 경우
}

// 다른 사람 풀이

function solution(n, words) {
  let answer = 0; // 규칙 어긴 index 저장
  words.reduce((prev, now, idx) => {
    // prev는 이전 단어의 마지막 글자, now는 현 단어
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0] // 현재 이전 단어들을 배열로 만듦, 현 단어가 있는지 확인, 있으면 1을 반환하는데, 있다면 혹은 이전 단어 마지막 글자가 현 단어의 첫글자랑 다르다면
        ? idx // idx 반환 -> 조건이 하나라도 맞으면 answer는 idx로 업데이트 됨
        : answer); // 아니면 기존값 유지
    return now[now.length - 1]; //
  }, '');

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0]; // 리천하는 who, turn 계산식은 같음
}
