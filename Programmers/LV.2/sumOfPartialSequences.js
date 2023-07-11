const sequence = [1, 1, 1, 2, 3, 4, 5];
const k = 5;

// 투포인터 알고리즘
// head -> 앞에 slice
// sum>k를 넘어가면 앞 배열값부터 크지 않을 때까지 빼준다.
// 값이 같다면 정답 가능성이 있는 것, answer에 추가
// 모두 순회하고 나면 길이가 가장 짧은 것을 리턴

function solution(sequence, k) {
  let answer = [],
    result = [];
  let sum = 0,
    head = 0;

  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
    if (sum > k) {
      while (sum > k) {
        sum -= sequence[head++];
      }
    }
    if (sum === k) {
      answer.push([head, i]);
    }
  }

  let min = sequence.length;
  answer.forEach((item) => {
    if (min > item[1] - item[0]) {
      min = item[1] - item[0];
      result = [item[0], item[1]];
    }
  });
  return result;
}

console.log(solution(sequence, k));
