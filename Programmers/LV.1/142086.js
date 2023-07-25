/**
 * 가장 가까운 같은 글자
b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
 */

// lastIndexOf()를 사용하는 것

function solution(s) {
  let answer = [];
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) {
      answer.push(-1);
      temp.push(s[i]);
    } else {
      answer.push(i - temp.lastIndexOf(s[i]));
      temp.push(s[i]);
    }
  }

  return answer;
}
