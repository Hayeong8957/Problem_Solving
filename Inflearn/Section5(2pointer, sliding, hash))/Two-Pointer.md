# 투포인터(Two Pointers)

## 투포인터란?

- 리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘
- 정렬되어 있는 두 리스트의 합집합에도 사용됨.
- 병합정렬(merge sort)의 counquer 영역의 기초가 되기도 한다.

## 예제 - 특정한 합을 가지는 부분 연속 수열 찾기

어떤 숫자들의 리스트가 주어질 때, 해당 리스트의 연속 수열의 합이 특정 값을 가지는 것을 확인하는 문제이다.

1. 시작점과 끝점이 첫번째 원소의 인덱스(0)를 가리키도록 한다.
2. 현재 부분 합이 M과 같다면 카운트한다.
3. 현재 부분 합이 M보다 작다면 end를 1 증가시킨다.
4. 현재 부분 합이 M보다 크거나 같다면 start를 1 증가시킨다.
5. 모든 경우를 확인할 때까지 2-4번 과정을 반복한다.

![image](https://user-images.githubusercontent.com/70371342/213168547-a184dfbc-b7d1-4d71-a037-e5bde894585c.png)
위와 같은 리스트와 M=5일 때의 예시를 생각해보자.

0. [초기 단계] : 시작점과 끝점이 첫번쨰 원소의 인덱스를 가리키도록 한다.
   ![image](https://user-images.githubusercontent.com/70371342/213168630-6a5e14a8-4a1f-4479-a279-68b528ff30dc.png)

- 현재 부분 합 : 1(1)
- 현재 카운트 : 0

1. [Step 1] : 이전 단계에서의 부분합이 1 -> end를 증가시킨다.
   ![image](https://user-images.githubusercontent.com/70371342/213168714-dba85829-ef52-413f-b7c6-8beaf09679ab.png)

- 현재 부분 합 : 3(1+2)
- 현재 카운트 : 0

2. [Step 2] : 부분합이 3 -> end를 증가시킨다.
   ![image](https://user-images.githubusercontent.com/70371342/213168787-956984e9-2f58-4f17-b825-e1192013b741.png)

- 현재 부분 합 : 6(1+2+3)
- 현재 카운트 : 0

3. [Step 3] : 부분합이 6 -> start를 1 증가시킨다.
   ![image](https://user-images.githubusercontent.com/70371342/213168866-6432f7b9-6c5b-4722-9029-4c9c4e7c3755.png)

- 현재 부분 합 : 5(2+3)
- 현재 카운트 : 1(부분합이 5이기 때문에)

- Step 1 ~ Step 3을 계속 반복한다.

4. [마지막]
   ![image](https://user-images.githubusercontent.com/70371342/213168944-871ef39b-a4bd-41ee-a038-37c22c92e236.png)

- 현재 부분 합 : 5

## 시간 복잡도 : O(N)

매 루프마다 항상 두 포인터 중 하나는 1씩 증가하고 각 포인터가 n번 누적 증가해야 알고리즘이 끝난다.
각각 배열 끝에 다다르는데 O(N)이라 둘을 합해도 여전히 O(N)

## 코드 (javascript)

```
function solution(n, arr) {
  let answer = 0;
  let sum = 0;
  let end = 0;

  // 시작점 start를 배열 시작부터 오른쪽으로 한 칸씩 옮김
  for (let start = 0; start < arr.length; start++) {
    // 끝점 end를 가능한 만큼 이동시킴
    while (sum < n && end < arr.length) {
      sum += arr[end];
      end++;
    }
    if (sum === n) answer++;
    sum -= arr[start];
  }
  return answer;
}
const arr = [1, 2, 3, 2, 5];
console.log(solution(5, arr));

```
