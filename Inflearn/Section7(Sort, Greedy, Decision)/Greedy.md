# 그리디(Greedy) 알고리즘

- 그리디 알고리즘(탐욕법)은 **현재 상황에서 지금 당장 좋은 것만 고르는 방법**을 의미
- 일반적인 그리디 알고리즘은 **문제를 풀기 위한 최소한의 아이디어를 떠올릴 수 있는 능력**을 요구함
- 그리디 해법은 그 **정당성 분석**이 중요하다.
  - 단순히 가장 좋아 보이는 것을 반복적으로 선택해도 최적의 해를 구할 수 있는지 검토한다.

<br/>

## [문제 상황]

Q. 루트 노드부터 시작하여 거쳐 가는 노드 값의 합을 최대로 만들고 싶다. 최적의 해는 무엇일까?
**_5 -> 7 -> 9 => 21_**
<img width="1163" alt="image" src="https://user-images.githubusercontent.com/70371342/229294379-c38a6b78-1218-4c45-9c1e-d27e96ca2d65.png">

Q. 단순히 매 상황에서 가장 큰 값만 고른다면 어떻게 될까?
**_5 -> 10 -> 4 => 19_**

- 최적의 해인 21보다는 적다. 하지만 이처럼 단순히 매상황에서 최적의 해만 고르는 것이 그리디 알고리즘이다.
- 일반적인 상황에서 **그리디 알고리즘은 최적의 해를 보장할 수 없을 때가 많다**.
- 하지만 코딩 테스트에서의 **대부분의 그리디 문제는 탐욕법으로 얻은 해가 최적의 해가 되는 상황에서, 이를 추론할 수 있어야** 풀리도록 출제된다.

<img width="1136" alt="image" src="https://user-images.githubusercontent.com/70371342/229294344-1b4e7377-1424-4117-a895-d07235d172c4.png">

<br/>

## 그리디 알고리즘의 활용

그리디 알고리즘을 적용하여 최적해를 구할 수 있는 문제는 다음 두 조건을 만족한다.

1. **greedy choice property**: 현재 선택이 이 후의 선택에 영향을 주지 않음
2. **optimal substructure**: 매 순간의 최적의 해가 문제 전체에 대한 최적의 해여야 함

<br/>

## [대표 문제]

Q. 당신은 음식점의 계산을 도와주는 점원이다. 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정한다. 손님에게 거슬러 주어야 할 돈이 N원일 때 거슬러 주어야 할 동전의 **최소 개수**를 구하시오. 단, 거슬러 줘야 할 돈 N은 항상 10의 배수이다.

### 문제 해결 아이디어

- 최적의 해를 빠르게 구하기 위해서는 가장 큰 화폐 단위부터 돈을 거슬러 주면 된다.
- N원을 거슬러 줘야 할 때, 가장 먼저 500원으로 거슬러 줄 수 있을 만큼 거슬러 준다.
- 이후에 100원, 50원, 10원짜리 동전을 차례대로 거슬러 줄 수 있을 만큼 거슬러 주면 된다.

### 거스름돈 : 정당성 분석

- 가장 큰 화폐 단위부터 돈을 거슬러 주는 것이 최적의 해를 보장하는 이유는?
  - 가지고 있는 동전 중에서 **큰 단위가 항상 작은 단위의 배수이므로 작은 단위의 동전들을 종합해 다른 해가 나올 수 없기 때문**이다.
- 만약에 800원을 거슬러 주어야 하는데 화폐 단위가 500원, 400원, 100원이라면 어떻게 될까?
  - 400원 2개가 최적의 해이지만, 탐욕법으로는 400원 2개라는 답을 못 찾게 됨
- 그리디 알고리즘 문제에서는 이처럼 문제 풀이를 위한 최소한의 아이디어를 떠올리고 이것이 정당한지 검토할 수 있어야 한다.

### python

```python
n = 1260
count = 0

# 큰 단위의 화폐부터 차례대로 확인하기
array = [500, 100, 50, 10]

for coin in array:
  count += n // coin    # 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
  n %= coin

print(count)
```

### javascript

```javascript
let n = 1260;
let count = 0;

// 큰 단위의 화폐부터 차례대로 확인하기
const array = [500, 100, 50, 10];

for (let i = 0; i < array.length; i++) {
  const coin = array[i];
  count += Math.floor(n / coin); // 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
  n %= coin;
}

console.log(count);
```

<br/>
