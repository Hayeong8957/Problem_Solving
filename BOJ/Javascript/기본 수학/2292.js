/**
 * 문제 : 위의 그림과 같이 육각형으로 이루어진 벌집이 있다.
 * 그림에서 보는 바와 같이 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다. * 한 대의 노트북을 생산하는 데에는 재료비와 인건비 등 총 B만원의 가변 비용이 든다고 한다.
 * 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오.
 * 예를 들면, 13까지는 3개, 58까지는 5개를 지난다.
 *
 * 입력 :
 * 첫째 줄에 N(1 ≤ N ≤ 1,000,000,000)이 주어진다.
 *
 * ex1)
 * 13
 *
 * 출력 : 입력으로 주어진 방까지 최소 개수의 방을 지나서 갈 때 몇 개의 방을 지나는지 출력한다.
 *
 * ex1)
 * 3
 *
 * 풀이 :
 * 벌집의 규칙은 1부터 시작해서 원형으로 수가 증가하는 지 확인해보니
 * 1 -> 7 -> 19 -> 37 -> 61 순서로 증가하는 것을 볼 수 있다.
 *   6 -> 12 -> 18 -> 24 만큼씩 증가한다.
 * 1+6n이라는 결론에 도출
 * while문을 이용해 n을 증가시키고, 타겟값과 비교해서 출력하는 코드 작성
 *  */

// .readFileSync('/dev/stdin')
let input = Number(
  require('fs')
    .readFileSync(
      'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
    )
    .toString()
    .split(' ')[0],
);
console.log(input);
let room = 1; // 방
let sum = 1; // 계속 더해줄 것

while (input > sum) {
  sum += room * 6;
  room++;
  // console.log(`room: ${room}, sum: ${sum}`);
}

console.log(room);
