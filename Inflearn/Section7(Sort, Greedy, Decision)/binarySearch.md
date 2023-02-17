# 이진 탐색 알고리즘(binary search)
![image](https://user-images.githubusercontent.com/70371342/219529494-94fb128d-1fef-4075-b8b8-258fcee23db2.png)

- 데이터가 정렬돼 있는 배열에서 특정한 값을 찾아내는 알고리즘
- 가운데에 있는 항목을 키값과 비교하여 다음 탐색 위치를 결정하여 키를 찾을 때까지 이진 탐색을 반복적으로 수행
- 배열의 중간에 있는 임의의 값을 선택하여 찾고자 하는 값 X와 비교
- 찾는 키값 > 원소의 키값 : **오른쪽 부분에 대해** 이진 탐색 실행
- 찾는 키값 < 원소의 키값 : **왼쪽 부분에 대해** 이진 탐색 실행
- 시간복잡도 : O(log N)

## 이진 탐색 방법

1. 자료의 집합에서 n/2 번째 원소를 키값(찾고자 하는 값)
2. 찾는 키값이 원소의 키값보다 크면 (n/2)+1 번째에서 n번째 부분에 대해 이진 탐색 수행
3. 2번 과정에서 찾는 키와 일치하면 그 원소를 반환
4. 만일 1, 2 과정의 반복 이후에도 키 값이 일치하는 원소가 없으면 찾는 원소가 없는 것으로 판단

## 반복문으로 구현

```
function binarySearch (arr, target) {
  let start = 0;
  let end = arr.length-1
  let mid

  while(start<=end){
    //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다

  mid = parseInt((start+end)/2)

  if(target === arr[mid]) return mid;
  else{
    if(target < arr[mid]){
      end = mid - 1;
    }
    else{
      start = mid + 1;
    }
  }
  return -1
}
```

### 재귀함수로 구현

```
function binarySearch(arr, target) {
  function search(start, end) {
    const mid = parseInt((start + end) / 2);

    if (start === end) {
      if (arr[start] != target) return -1;
      return mid;
    } else if (target > arr[mid]) {
      return search(mid + 1, end);
    } else {
      return search(start, mid - 1);
    }
  }

  return search(0, arr.length - 1);
}
```
