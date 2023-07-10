// 그리워하는 사람의 이름 문자열 : name
// 사람별 그리움 점수를 담은 정수 배열: yearning
// 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo
// return photo에 주어진 순서대로 배열에 담아 return
// 자바스크립트 map
// 이름이 key값, 숫자가 value값이 될 것
// 0으로 초기화한 table을 생성하고, 길이가
const name = ['may', 'kein', 'kain', 'radi'];
const yearning = [5, 10, 1, 3];
const photo = [
  ['may', 'kein', 'kain', 'radi'],
  ['may', 'kein', 'brin', 'deny'],
  ['kon', 'kain', 'may', 'coni'],
];

/** 내 풀이 */
function solution(name, yearning, photo) {
  const newMap = new Map();
  const answer = [];
  for (let i = 0; i < name.length; i++) {
    newMap.set(`${name[i]}`, yearning[i]);
  }
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (newMap.get(photo[i][j])) {
        score += newMap.get(photo[i][j]);
      }
    }
    answer[i] = score;
  }

  // console.log(newArr);
  // console.log(answer);
  return answer;
}

/** 다른 사람 풀이 */
function solution(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0),
  );
}
