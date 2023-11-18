// [1, 2, 3, 3, 2, 1, 4] 중에서 오직 하나밖에 없는 숫자를 뽑아라
// 순회하면서 Map으로 값을 key, 카운트를 value로 하는 Map 객체를 만들면 됨

// || 표현식 -> map.get(x) || 0은 map.get(x)가 undefined면 0을 반환
// 그래서 map.get(x)가 값을 가지고 있다면 해당 값을 사용하고 없으면 0을 사용
// 그래서 해당 값에 더할 수 있음
// 순회하면서 1인 값 그 값의 키를 리턴

function solution(arr) {
  let map = new Map();

  for (x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value === 1) return key;
  }
}

console.log(solution([1, 2, 3, 3, 2, 1, 4]));
