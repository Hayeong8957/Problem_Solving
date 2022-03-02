/**
 * 문제 : 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
 * 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
 * X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
 *
 * 입력 :
 * 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
 *
 * ex1)
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 14
 *
 * 출력 : 첫째 줄에 분수를 출력한다.
 * ex1)
 * 1/1
 * 1/2
 * 2/1
 * 3/1
 * 2/2
 * 1/3
 * 1/4
 * 2/3
 * 3/2
 * 2/4
 *
 * 풀이 : 찾고자 하는 x번을 포함하고 있는 그룹을 찾고, 그 그룹 안에서 x번째 분모/분자값을 찾아내야 한다.
 * 1/1부터 시작한다고 생각할 때, 해당 그룹의 분수 개수는 1부터 1씩 증가한다.
 * 그룹 개수가 증가할 때마다 입력 받은 X에서 그룹을 빼주면 해당 그룹에 도달했을 때, X는 0 또는 음수가 된다.
 * groupCounter가 곧 해당 그룹의 분수 개수라는 것이다.
 * if( group % 2 === 0 )을 이용해서 짝수일 때, 분모 출력을 groupCounter + X로 해주면
 * 해당 그룹의 끝 기준으로 자신의 순번을 찾는다. (12345처럼 오름차순 기준이기 때문)
 * 그리고 분자는 1+(-X)를 해주면 역시 그룹의 끝 기준으로 자신의 순번을 찾는다.(54321처럼 내림차순이기 때문)
 *
 * 예를 들어 11번째 분수를 찾아보자.
 * while(x>0){}코드를 통해 groupCounter는 5, x는 -4라는 것을 알아낼 수 있다.
 * 그룹은 5번째이므로 홀수이기 때문에, 분모는 내림차순, 분자는 오름차순이다.
 * 분모 그룹은 54321
 * 분자 그룹은 12345
 * 이며 분모는 1+-(-4) = 5이므로, 5번째 그룹의 1번째 수이며,
 * 분자는 5+(-4)=1이므로, 역시 5번째 그룹의 1번째 수다.
 *
 *  */

const fs = require("fs");
const x = Number(fs.readFileSync("/dev/stdin").toString().trim());

let groupCounter = 0;
let ascendingNumArr = [];
let descendingNumArr = [];

while (x > 0) {
  groupCounter++;
  x = x - groupCounter;
}

for (let i = 0; i < groupCounter; i++) {
  ascendingNumArr.push(i + 1);
  descendingNumArr.push(groupCounter - i);
}

if (groupCounter % 2 === 0) {
  console.log(
    `${ascendingNumArr[groupCounter - 1 + x]}/${
      descendingNumArr[groupCounter - 1 + x]
    }`
  );
} else {
  console.log(
    `${descendingNumArr[groupCounter - 1 + x]}/${
      ascendingNumArr[groupCounter - 1 + x]
    }`
  );
}

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let number = Number(input);
// let value = 1;
// while (true) {
// 	number -= value;
// 	if (number <= 0) {
// 		number += value;
// 		break;
// 	}
// 	value++;
// }

// if (value % 2 === 1) {
// 	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
// } else {
// 	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
// }
