// 뒤에꺼 앞에 붙여가면서 B배열이랑 비교
// A랑 B 같으면 0 출력
// for(i=1 ~ length+1까지 돌아)
// 1. (1) hello = hello => 0 출력
// 2. (1) ohell != lohel
//    (2) lohel = lohel => 같아졌으므로  i 출력

function solution(A, B) {
  let arr = [...A];
  for (let i = 1; i <= A.length + 1; i++) {
    if (A === B) return 0;
    else {
      arr.unshift(arr.pop());
      if (arr.join('') === B) return i;
    }
  }
  return -1;
}

// 다른 사람 풀이
let solution2 = (a, b) => (b + b).indexOf(a);

// b를 두 번 반복시킨 다음 a가 그 안에 있는지 찾아보면 밀었을 때
// 그 글자를 만들 수 있는 지 알 수 있다.
// indexOf -> 값이 없으면 -1을 출력해줌
// ('lohellohel').indexOf('hello')
// lo hello hel => 처음 만난 hello인덱스 반환 => 2
