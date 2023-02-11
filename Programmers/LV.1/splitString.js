// 각각 글자들을 세서 나온 횟수가 같을 시점에서 끊고,
// 다시 0으로 초기화해서 각각 글자들 세는 거 반복
// absdcccddd일때 => a:1, b:1/
// s:1, d:1/ c:3, d:3/  ====> ab, sd, cccddd => 3 반환
// 11/11/123123/
// => 전에 글자랑 비교해서 다른 문자면 1 저장
// 전에꺼랑 비교해서 같은 문자면 다음 자리에 1++해서 저장
// => 숫자 저장한 배열에서 전에 자리 숫자와 현재 자리 숫자가 1이라면, cnt++
// =>
// function solution(s) {
//   let same = 1,
//     cnt = 0;
//   let sArr = [...s];
//   let numArr = Array.from({ length: s.length }, () => 0);
//   for (let i = 0; i < sArr.length; i++) {
//     numArr[0] = 1;
//     if (sArr[i - 1] !== sArr[i]) numArr[i] = 1;
//     else if (sArr[i - 1] === sArr[i]) numArr[i] = ++same;
//   }
//   for (let j = 0; j < numArr.length; j++) {
//     if(numArr[j] === numArr[j+1] === 1) {
//       cnt++;
//     }
//     else if()

//   }
//   return answer;
// }

// absdcccddd

function solution(s) {
  let answer = 0;
  let tempChar;
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (cnt === 0) {
      answer++;
      tempChar = s[i];
      cnt = 1;
    } else {
      if (tempChar !== s[i]) cnt--;
      else cnt++;
    }
  }
  return answer;
}
