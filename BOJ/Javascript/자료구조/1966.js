/** 큐; 프린터 큐
 1. 현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
 2. 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면,
 이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다.
 그렇지 않다면 바로 인쇄를 한다.
 
 예를 들어 Queue에 4개의 문서(A B C D)가 있고, 중요도가 2 1 4 3라면 C를 인쇄하고
 다음으로 D를 인쇄하고 A, B를 인쇄하게 된다.
 
 현재 Queue에 있는 문서의 수와 중요도가 주어졌을 때
 어떤 한 문서가 몇 번째로 인쇄되는지 알아내는 것.
 예를 들어 위의 예에서 C문서는 1번째로, A문서는 3번째로 인쇄되게 된다.
 
 입력: 첫 줄에 테스트케이스의 수가 주어진다. 각 테스트케이스는 두 줄로 이루어져 있다.
 테스트케이스의 첫 번째 줄에는 문서의 개수 N(1 ≤ N ≤ 100), 몇 번째로 인쇄되었는지 궁금한 문서가 
 현재 Queue에서 몇 번째에 놓여 있는지를 나타내는 정수 M(0<= M < N)이 주어진다.
 이때 맨 왼쪽은 0번째라고 하자. 두번째 줄에는 N개 문서의 중요도가 차례대로 주어진다.
 중요도는 1이상 9이하의 정수이고, 중요도가 같은 문서가 여러 개 있을 수도 있다.
 
 출력: 각 테스트 케이스에 대해 문서가 몇 번째로 인쇄되는지 출력한다.
 
 예제 입력 1:
3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1

예제 출력 1:
1
2
5

풀이:
5 => 1

1 2(o) 3 4  
            push
2(o) 3 4 1 
            push
3 4 1 2(o)  
            push
4 1 2(o) 3  
            shift   cnt : 1
1 2(o) 3    
            push
2(o) 3 1
            push
3 1 2(o)   
            shift   cnt : 2


# javascript some()
조건을 만족하는 값이 발견되면 그 즉시 순회 중단
내부 원소 한 개라도 만족 true 출력시 순회 끝

some(function(element, index, array) {}) 
- element : 현재 처리 중인 요소
- index : 현재 처리 중인 요소의 인덱스
- array : 호출된 배열
=====> some()메소드는 true, false를 반환
=====> 콜백함수 내부에는 해당 값에 대한 조건을 작성

[2, 5, 8, 1, 4].some((x) => x > 10);  // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true

 */

let arr = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// [ '1 0\r', '5\r', '4 2\r', '1 2 3 4\r', '6 0\r', '1 1 9 1 1 1' ]

arr.shift();
arr = arr.map((item) => item.split(' ').map(Number));
// console.log(arr);
// [
//   [ 1, 0 ],
//   [ 5 ],
//   [ 4, 2 ],
//   [ 1, 2, 3, 4 ],
//   [ 6, 0 ],
//   [ 1, 1, 9, 1, 1, 1 ]
// ]

// 첫번째 줄은 [배열 갯수, 위치] 두번째 줄은 [문서 중요도]
for (let i = 0; i < arr.length; i += 2) {
  let location = arr[i][1]; // 첫번째 줄의 두번째가 위치 나타내는 data
  let inputArr = arr[i + 1];
  //i++; // (0, 1) (2, 3) (4, 5) ...
  // console.log('위치: ', location);
  // console.log('중요도 배열: ', inputArr);

  // inputArr 배열 각 요소마다 해당 요소 인덱스를 쌍으로 하는 배열 만듦.
  // [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ] ]
  let queue = inputArr.map((priority, idx) => [priority, idx]);
  // console.log('queue: ', queue);
  let cnt = 0;

  while (queue.length) {
    // queue의 첫 요소 꺼내서 나머지 애들과 비교
    // [1, 0] ===> priority=1, idx=0
    let [priority, idx] = queue.shift();

    // queue배열의 나머지 요소들 0번째 인덱스의 값과 [[2, 1], [3, 2], [4, 3]]  | 1 vs 2, 3, 4
    // 현재 꺼낸 priority값과 비교 =====> 남아있는 배열 중에 하나라도 큰 값이 있으면 true반환, 순회 종료
    // 큰 값 있으면 꺼냈던 아이 다시 queue에 push   [[2, 1], [3, 2], [4, 3], [1, 0]]
    if (queue.some((arrValue) => arrValue[0] > priority)) {
      queue.push([priority, idx]);
    } else {
      // 없으면 중요도가 제일 큰 아이라는 것이니 cnt++
      cnt++;
      // 현재 문서의 위치가 궁금한 위치와 일치하는 지 확인
      // 일치하면 출력하고 반복문 종료
      if (idx === location) {
        console.log(cnt);
        break;
      }
    }
  }
}
