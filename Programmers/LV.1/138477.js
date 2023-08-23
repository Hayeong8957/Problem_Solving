// score을 돌면서 temp에 하나씩 push,
// temp에 push 될 때마다 sort하여 내림차순으로 정렬 후 pop한 값이 answer에 넣어질 것

// 첫번째 풀이
function solution(k, score) {
  let answer = [];
  let temp = [];

  for (const s of score) {
    if (temp.length === k) {
      if (s < temp[temp.length - 1]) {
        answer.push(temp[temp.length - 1]);
        continue;
      }
      temp.push(s);
      temp.sort((a, b) => b - a);
      answer.push(temp.pop());
    } else if (temp.length < k) {
      temp.push(s);
      temp.sort((a, b) => b - a);
      answer.push(temp[temp.length - 1]);
    }
  }
  return answer;
}
// 틀림

// 두번째 풀이
function solution(k, score) {
  let answer = [];
  let temp = [];

  for (const s of score) {
    temp.push(s);
    temp.sort((a, b) => b - a);
    if (temp.length >= k) {
      answer.push(temp[k - 1]);
    } else {
      answer.push(temp[temp.length - 1]);
    }
  }
  return answer;
}

// 다른 사람 풀이
// 1. score를 돌면서 length(k)가 이하인 녀석들의 최하위 점수를 만들어 배열에 리턴하면 된다.
// 2. 단, score는 이전에 돌면서 만들었던 배열 k 갯수에 새로들어오는 score를 추가해서 k개로 다시 만들어야 한다.

function solution(k, score) {
  var answer = [];

  return score.reduce((acc, cur) => {
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)];
  }, []);
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
