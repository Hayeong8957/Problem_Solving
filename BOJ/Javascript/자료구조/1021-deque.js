/** 회전하는 큐
 * 지민이는 N개의 원소를 포함하고 있는 양방향 순환 큐를 가지고 있다. 
 * 지민이는 이 큐에서 몇 개의 원소를 뽑아내려고 한다.
 * 지민이는 이 큐에서 다음과 같은 3가지 연산을 수행할 수 있다.
 * 1. 첫 번째 원소를 뽑아낸다. 이 연산을 수행하면, 원래 큐의 원소가 a1, ..., ak이었던 것이 a2, ..., ak와 같이 된다.
 * 2. 왼쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 a2, ..., ak, a1이 된다.
 * 3. 오른쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 ak, a1, ..., ak-1이 된다.
 * 큐에 처음에 포함되어 있던 수 N이 주어진다. 그리고 지민이가 뽑아내려고 하는 원소의 위치가 주어진다. 
 * (이 위치는 가장 처음 큐에서의 위치이다.) 
 * 이때, 그 원소를 주어진 순서대로 뽑아내는데 드는 2번, 3번 연산의 최솟값을 출력하는 프로그램을 작성하시오.
 * 
 * 입력: 첫째 줄에 큐의 크기 N과 뽑아내려고 하는 수의 개수 M이 주어진  다. 
 * N은 50보다 작거나 같은 자연수이고, M은 N보다 작거나 같은 자연수이다. 
 * 둘째 줄에는 지민이가 뽑아내려고 하는 수의 위치가 순서대로 주어진다. 
 * 위치는 1보다 크거나 같고, N보다 작거나 같은 자연수이다.
 * 
 * 출력: 첫째 줄에 문제의 정답을 출력한다.
 * 
예제 입력:
10 3
2 9 5

예제 출력: 8

풀이:
(2 9 5)
1 2 3 4 5 6 7 8 9 10  

2 3 4 5 6 7 8 9 10 1 (2번 연산)
3 4 5 6 7 8 9 10 1
1 3 4 5 6 7 8 9 10 (3번 연산)
10 1 3 4 5 6 7 8 9 (3번 연산)
9 10 1 3 4 5 6 7 8 (3번 연산)
10 1 3 4 5 6 7 8    => 5의 위치에서 왼쪽과 오른쪽의 남은 원소의 수를 비교해 더 작은 쪽으로 움직이게
1  3 4 5 6 7 8 10  (2번)
3  4 5 6 7 8 10 1  (2번)
4  5 6 7 8 10 1 3  (2번)
5  6 7 8 10 1 3 4  (2번)

===> 총 2번(5회), 3번(3회) = 8회

- 현재 뽑아내려는 게 큐 왼쪽에 가까운지 뒤쪽에 가까운지 판별
- Array.from({length: N}, (x) => x+1)

 */
let [NM, temp] = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .split('\n');
let [N, M] = NM.split(' ').map(Number);
let targetNums = temp.split(' ').map(Number);
let arr = Array.from({ length: N }, (_, x) => x + 1);
let cnt = 0;

for (let i = 0; i < M; i++) {
  let target = targetNums[i];
  if (targetNums[i] === arr[0]) {
    arr.shift();
  } else {
    let targetIdx = arr.indexOf(target);
    let mid = arr.length / 2;

    if (targetIdx <= mid) {
      for (let j = 0; j < targetIdx; j++) {
        let tmp = arr.pop();
        arr.push(tmp);
        cnt++;
      }
    } else {
      for (let k = 0; k < arr.length - targetIdx; k++) {
        let tmp = arr.pop();
        arr.unshift(tmp);
        cnt++;
      }
    }
    arr.shift();
  }
}

// console.log(N);
// console.log(M);
// console.log(target);
// console.log(arr);
console.log(cnt);
