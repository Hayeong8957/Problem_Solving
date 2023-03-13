# 스택(stack)

- 어떤 데이터의 구체적인 구현 방식은 생략한 채, **데이터의 추상적 형태와 그 데이터를 다루는 방법만을 정해놓은 것인 ADT(Abstract Data Type; 추상 자료형)** 중 하나.
- 데이터를 집어넣을 수 있는 **선형(linear) 자료형**이다.
- 먼저 들어간 자료가 나중에 나오는 **후입선출 자료구조(LIFO; Last In First Out)**
- 서로 관계가 있는 여러 작업을 연달아 수행하면서 **이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용**

![Untitled](https://user-images.githubusercontent.com/70371342/224556945-9cc2e29b-5e62-460d-87d5-35225ab0ba01.png)

# 스택 사용 사례

- **재귀 알고리즘:** 재귀적으로 함수 호출하는 경우 임시 데이터를 스택에 넣어줌, 재귀함수를 빠져 나와 백트레킹 할 때는 스택에 넣어 두었던 임시 데이터(가장 최근에 들어온 데이터)를 빼줘야함
- 미로찾기, 뒤로 가기, 실행 취소: 웹 브라우저 방문 기록, 괄호 검사, 후위 표기법 계산(2+3)*4+9 → 23+4*9+

![Untitled 1](https://user-images.githubusercontent.com/70371342/224556973-a9d14fb4-ca84-4948-9141-984263855fa1.png)

# 메소드

- **push:** 스택 맨 위에 아이템 삽입
- **pop:** 스택 맨 위의 아이템 제거하고 그 아이템 반환

# Big-O (시간 복잡도)

- **Insertion : O(1)**

스택 자료 추가 → 스택 맨 위에 자료 하나 올리기

스택이 무수히 커도, 자료를 삽입하기 위한 한 번의 노력만 하면 됨

- **Deletion : O(1)**

마찬가지로 스택이 무수히 커도, 맨 위의 자료만 삭제하면 됨

- **Search : O(n)**

EX) 스택에 10개의 블록이 쌓여 있다 → 맨 위에 올려져 있는 자료를 검색하면 우리는 별도의 노력 없이 바로 데이터를 찾을 수 있음

하지만 가장 밑 자료를 검색한다면, 모든 자료를 모두 검색해봐야 한다. 이럴 경우 모든 자료를 찾아봐야 하므로, 시간 복잡도는 O(n)으로 표현할 수 있다.

# stack overflow

재귀 함수를 무한 호출했을 때 나오는 대표적인 에러

스택 공간이 가득 찼을 때 하나의 데이터를 더 넣으려고 할 경우 나오는 에러

![Untitled 2](https://user-images.githubusercontent.com/70371342/224557007-038b4d43-d01e-460d-a1e0-194beba779e3.png)

# stack underflow

스택 저장공간에 데이터가 없는데 프로그램에서 스택에서 데이터를 꺼내려고 할 경우 언더플로우가 일어나며 프로그램에 오류를 야기하게 됨

![Untitled 3](https://user-images.githubusercontent.com/70371342/224557018-8ea2048d-85a7-4dce-9955-2408648b8e94.png)

# 스택 기초 문제 예제

괄호가 입력되면 올바른 괄호이면 "YES", 올바르지 않으면 "NO"를 출력한다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()())))은 올바른 괄호가 아니다.

```javascript
function solution(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') {
      stack.push();
    } else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
```

# In JavaScript

스택은 자바스크립트에 내장되어 있지 않지만 배열과 내장 함수들을 이용해 구현할 수 있다.

### 배열로 스택class 구현

```jsx
export default class Stack {
  constructor() {
    // 클래스 생성자, 인스턴스 생성하고 초기화하기 위한 특수 메서드
    // item들을 받을 배열 생성
    this.items = [];
  }

  push(item) {
    // 스택에 새로운 아이템 추가하는 메소드
    this.items.push(item);
  }

  pop() {
    // 스택에서 가장 최근에 추가된 아이템 제거하고 반환
    return this.items.pop();
  }

  peek() {
    // 스택에서 가장 최근 아이템 반환, 제거X
    if (this.items.length === 0) {
      return null; // 스택 비어 있으면 null 반환
    }
    // items 배열의 마지막 item만 가져와준다. pop()과 다르게 배열에서 아이템이 빠지는 것이 아닌 유지된 채로 마지막 값만 받아와줌
    return this.items[this.items.length - 1];
  }

  getSize() {
    // 스택의 크기를 반환
    return this.items.length;
  }

  isEmpty() {
    // 스택이 비어있는지 여부를 반환
    return this.getSize() === 0;
  }
}
```

### 연결리스트로 스택class 구현

> **연결리스트**

    데이터의 집합을 저장하는 자료구조 중 하나. 데이터는 노드로 구성되어 있으며, 각 노드는 데이터와 다음 노드를 가리키는 포인터로 이루어져 있음.

    이러한 구조로 인해 데이터를 일렬로 연결하여 저장할 수 있음

    인덱스를 사용하여 데이터에 접근하는 것은 불가능 ⇒ 데이터를 찾기 위해서는 처음부터 순서대로 노드를 탐색해야 한다.

    하지만 노드를 추가하거나 삭제할 때 배열보다 유연하게 작업할 수 있기 때문에 동적인 자료구조로서 유용하게 사용됨

```jsx
class Node {
  constructor(data) {
    this.data = data; // 데이터 저장
    this.next = null; // 다음 노드 가리키는 변수
  }
}

class Stack {
  constructor() {
    this.top = null; // 최상위 노드를 가리키는 top변수
  }

  isEmpty() {
    return this.top === null; // top변수가 null이면 비어있어요~
  }

  push(data) {
    // 새로운 데이터를 받고 노드객체 생성,
    const newNode = new Node(data);
    // 현재 최상위 노드(현재의 this.top노드)는 새로운 노드의 next로 설정됨
    newNode.next = this.top;
    // 그리고 최상위 노드는 새로 들어온 newNode가 된다.
    this.top = newNode;
  }

  pop() {
    // 스택이 비어있지 않은 경우에만 최상위 노드 삭제
    if (this.isEmpty()) return;
    // 최상단 노드가 pop()되면서 최상단 밑에있던 노드가
    // 최상단 노드(this.top)가 된다.
    this.top = this.top.next;
  }

  peek() {
    // 최상위 노드에 있는 데이터를 반환하는 메서드
    // 스택 비어있지 않은 경우에만 최상위 노드 데이터 반환
    if (this.isEmpty()) return;
    return this.top.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.top;
    process.stdout.write('(TOP) ');
    while (curr.next) {
      process.stdout.write(`${curr.data} ---> `);
      curr = curr.next;
    }
    process.stdout.write(`${curr.data}\n`);
  }
  /* display 메서드는 스택에 저장된 데이터를 출력하는 메서드
스택이 비어있지 않은 경우에만 스택의 최상위 노드부터 마지막 노드까지 
순회하여 데이터를 출력. 출력 형식은 "(TOP) A ---> B ---> C" */
}
```
