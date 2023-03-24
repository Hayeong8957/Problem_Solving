/** 큐
 문제:
 N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며,
 1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.

 이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 우선, 제일 위에 있는 카드를 바닥에 버린다.
 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

 예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다.
 1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다.
 3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

 N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

 예제 입력: 6

 예제 출력: 4

 풀이 :
 1  3  5  2  6  3
 2  4  6  3  3
 3  5  2  6
 4  6  3
 5  2
 6

 const queue = Array.from({ length: N }, (v, i) => i + 1);
while (queue.length > 1) {
  queue.shift();
  queue.push(queue.shift());
}
console.log(queue.pop());

==> 시간 초과, 링크드 리스트로 풀어야함. 
 */

const N = Number(
  require('fs')
    .readFileSync(
      'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
    )
    // .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n'),
);
// 하나의 노드를 표현하는 class
class Node {
  constructor(value) {
    this.value = value; // 노드가 저장하는 값
    this.next = null; // 다음 노드를 가리키는 포인터
  }
}

// 연결 리스트를 표현하는 class
class LinkedList {
  constructor() {
    this.head = null; // 첫번째 노드를 가리키는 포인터
    this.tail = null; // 마지막 노드를 가리키는 포인터
    this._size = 0; // 연결리스트에 저장된 노드의 수
  }

  // 노드 추가
  add(value) {
    const newNode = new Node(value); // 새 노드를 만들고

    if (!this.head) {
      // 첫번째 노드가 없다면, linked list가 비어있다는 뜻
      this.head = newNode; // head를 새 노드로 설정
    } else {
      // 그렇지 않으면
      this.tail.next = newNode; // tail노드의 next를 새로운 노드로 설정
    }

    this.tail = newNode; // tail노드를 새로운 노드로 설정
    this._size++; // size ++

    return newNode; // 새로 추가된 노드 반환
  }

  // linked lisd의 첫 번째 노드의 값을 반환하는 메서드
  getHead() {
    return this.head.value;
  }

  // linked list의 첫 번째 노드를 제거하는 메서드
  removeHead() {
    this.head = this.head.next; // head를 다음 노드로 설정
    this._size--; // size 1 감소
  }

  // 저장된 노드의 수를 반환하는 메서드
  getSize() {
    return this._size;
  }
}

let queue = new LinkedList();
for (let i = 1; i <= N; i++) {
  queue.add(i);
}
while (queue.getSize() > 1) {
  queue.removeHead();
  queue.add(queue.getHead());
  queue.removeHead();
}
console.log(queue.getHead());
