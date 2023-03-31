# 선택 정렬(selection sort)

![selectionsort](https://user-images.githubusercontent.com/70371342/228280145-0a54affe-b9c8-4cc0-aee1-390e38d56ac8.gif)

- 오른쪽 리스트에서 가장 작은 숫자를 선택해서 왼쪽 리스트이 맨 뒤로 이동하는 작업 반복
- 비효율적, 자료 이동 갯수가 정해짐, 수행시간 O(N²)

## python

```python
def selection_sort(a):
    for i in range(0, len(a)-1):           # 1
        minimum = i                        # 2
        for j in range(i, len(a)):         # 3
            if a[minimum] > a[j]:
                minimum = j
        a[i], a[minimum] = a[minimum], a[i]
				print(f"step{i+1}: {a}")
```

1. 현재 index부터 마지막 index까지 최소값의 index를 찾아냄

- `len(a) - 1` → 마지막 요소는 정렬이 되었다고 생각하고 회전 수 포함X,
- 이것 대신 내부 반복문을 `for j in range(i+1, len(a)):` 로 지정해도 결과는 같음

2. i번째 요소가 가장 작다는 전제조건 → 현재 index를 min_Idx변수에 담음
3. 최소값의 index와 현재 index에 있는 값을 상호 교환 → min_Idx가 현재 index의 값보다 크면 min_Idx = j

```python
정렬 전: 	[40, 60, 70, 50, 10, 30, 20]
step1: [10, 60, 70, 50, 40, 30, 20]
step2: [10, 20, 70, 50, 40, 30, 60]
step3: [10, 20, 30, 50, 40, 70, 60]
step4: [10, 20, 30, 40, 50, 70, 60]
step5: [10, 20, 30, 40, 50, 70, 60]
step6: [10, 20, 30, 40, 50, 60, 70]
step7: [10, 20, 30, 40, 50, 60, 70]
정렬 후: 	[10, 20, 30, 40, 50, 60, 70]
```

## javascript

```javascript
function selectionSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(selectionSort(arr));
```

# 삽입 정렬(insertion sort)

![insertionsort](https://user-images.githubusercontent.com/70371342/228280250-75c68bda-98cf-4341-a2ae-c1228f1114a4.gif)

- 정렬된 부분과 정렬 안 된 부분으로 나뉘며, 정렬 안 된 부분의 가장 왼쪽 원소를 정렬된 부분에 “삽입”하는 방식의 정렬 알고리즘
- 두 번째 자료부터 시작해 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입
- 정렬 안 된 부분의 가장 왼쪽 원소를 정렬된 부분에 삽입, 무조건 두 번째 자료부터 시작해 그 앞의 자료들과 비교
  - 일단 첫 번째 자료는 무조건 정렬이 되어있다고 생각하면 됨
  - 현재 자료가 앞의 자료보다 작다면 앞으로 가서 삽입해주는 느낌
- 입력이 이미 정렬된 경우 : O(N)
  입력이 역으로 정렬된 경우(최악) : O(N²)

## python

```python
def insertion_sort(a):
    for i in range(1, len(a)):              # 1
        for j in range(i,0,-1):             # 2
            if a[j-1] > a[j]:               # 3
                a[j], a[j-1] = a[j-1], a[j] # 4
        print(f"step{i + 1}: {a}")
```

1. 처음 key값은 두 번째 자료부터 시작한다.
2. 앞의 값들과 비교 위함
3. 앞의 값이 현재 값보다 크면
4. 상호 교환

- i : 현재 삽입 위치를 찾아야 하는, 정렬 안 된 부분의 가장 왼쪽 첫번째 데이터
  j ~ 0 : 정렬된 데이터 (0 ~ i-1)

```python
정렬 전: 	[40, 60, 70, 50, 10, 30, 20]
step2: [40, 60, 70, 50, 10, 30, 20]
step3: [40, 60, 70, 50, 10, 30, 20]
step4: [40, 50, 60, 70, 10, 30, 20]
step5: [10, 40, 50, 60, 70, 30, 20]
step6: [10, 30, 40, 50, 60, 70, 20]
step7: [10, 20, 30, 40, 50, 60, 70]
정렬 후: 	[10, 20, 30, 40, 50, 60, 70]
```

## javascript

- solution1

```javascript
function insertionSort(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(insertionSort(arr));
```

- solution2

```javascript
function insertionSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}
```

1. outer loop: 첫 idx는 1부터 시작
2. temp: arr[i]값을 임시로 저장해놓는다.
3. inner loop: j는 i-1~0으로 돈다 -> i번째를 제외한 나머지 값들과의 비교를 위해
4. arr[j] > temp보다 크면 arr[j+1] = arr[j]로 복사해준다.
5. j가 -1이 되어 끝이되면, j+1을 해줘서 그 지점에 temp를 넣어줌

# 버블 정렬(bubble sort)

![bubble-sort-001](https://user-images.githubusercontent.com/70371342/228280626-15a3c7ec-28a9-4ec1-93fa-6838f6fb3831.gif)

- 인접한 2개의 레코드를 비교하여 순서대로 서로 교환
- 리스트의 전체에 수행, **한 번 스캔 완료시 오른쪽 끝에 가장 큰 레코드**
- 끝으로 이동한 레코드 제외하고 다시 스캔 반복
- 스캔 작업 총 횟수(일반적인 경우) = data 갯수 - 1
- 수행시간 : O(N²)

## python

```python
def bubble_sort(a) :
    for i in range(len(a)-1, 0, -1) :
        changed = False
        for j in range(i) :
            if (a[j] > a[j+1]) :
                a[j], a[j+1] = a[j+1], a[j]
                changed = True

        if not changed :
            break    # if조건이 False일 시 다음 스캔으로 넘어감
				print(f"step{len(a) - i} : {a}")
```

```python
정렬 전: 	[40, 60, 70, 50, 10, 30, 20]
step1 : [40, 60, 50, 10, 30, 20, 70]
step2 : [40, 50, 10, 30, 20, 60, 70]
step3 : [40, 10, 30, 20, 50, 60, 70]
step4 : [10, 30, 20, 40, 50, 60, 70]
step5 : [10, 20, 30, 40, 50, 60, 70]
정렬 후: 	[10, 20, 30, 40, 50, 60, 70]
```

## javascript

- solution 1

```javascript
function bubbleSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    changed = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        changed = true;
      }
    }
    if (changed !== true) break;
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(bubbleSort(arr2));
```

1. outer ;oop는 i가 0부터 arr.length까지 돌림
2. Inner loop는 j가 0부터 arr.length - 1 - i까지 돌림
   -> inner loop는 왜 -1을 해야 하냐면 j랑 j+1이랑 비교할 거기 때문에
   -> 마지막 데이터를 포함하지 않아도 검색 대상에 포함되기 때문임
   -> -i하는 이유는 각 회전이 끝날 때마다 맨 마지막 데이터는 정렬이 된 상태이기 때문임

3. 값이 바뀌면 flag변수를 줌
4. 값이 바뀌지 않은 경우는 정렬이 되어있는 상태이기에 다음 스탭으로 넘어가줌

- solution 2

```javascript
function bubbleSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}
```

# 쉘 정렬

<img width="695" alt="image" src="https://user-images.githubusercontent.com/70371342/228281435-8f5b29a7-d9f2-49f7-bb35-7079b5f99e69.png">
<img width="659" alt="image" src="https://user-images.githubusercontent.com/70371342/228281666-a35df438-9bd0-4a0a-a769-8d803fce9e3c.png">

- 삽입정렬이 현재 원소를 앞부분에 삽입하기 위해 이웃하는 원소의 숫자끼리 비교하며 한 자리씩 이동하는 단점 보완
- 리스트를 일정 간격의 부분리스트로 나누고 각각의 부분 리스트를 삽입정렬함, 그리고 간격을 줄여나감
- 간격이 1인 경우는 삽입 정렬과 동일
- 수행시간 : O(N^1.5), O(N²)

## python

```python
def shell_sort(a) :
    n = len(a)
    gap = n // 2
    while gap >= 1 :
        if (gap % 2) == 0 : gap += 1
        for i in range(gap, n) :
            j = i
            while j >= gap and a[j] < a[j-gap] :
                a[j], a[j-gap] = a[j-gap], a[j]
                j -= gap
        print( "    Gap=", gap, a)
        gap = gap // 2
```

```python
Original :  [40, 60, 70, 50, 10, 30, 20]
    Step1= [40, 10, 70, 50, 60, 30, 20]
    Step2= [40, 10, 30, 50, 60, 70, 20]
    Step3= [40, 10, 30, 20, 60, 70, 50]
    Step4= [20, 10, 30, 40, 60, 70, 50]
    Gap= 3 [20, 10, 30, 40, 60, 70, 50]
    Step5= [10, 20, 30, 40, 60, 70, 50]
    Step6= [10, 20, 30, 40, 60, 50, 70]
    Step7= [10, 20, 30, 40, 50, 60, 70]
    Gap= 1 [10, 20, 30, 40, 50, 60, 70]
Shell    :  [10, 20, 30, 40, 50, 60, 70]
```

## javascript

```javascript
function shellSort(arr) {
  // 셸 정렬에 사용될 간격을 초기화
  let gap = Math.floor(arr.length / 2);

  // gap이 0이 될 때까지 반복
  while (gap > 0) {
    // 간격에 따라 부분리스트를 생성
    for (let i = gap; i < arr.length; i++) {
      // 부분리스트를 삽입 정렬로 정렬
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    // 다음 간격 설정
    gap = Math.floor(gap / 2);
  }
  return arr;
}
```
