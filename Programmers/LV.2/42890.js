
// 주어진 속성 조합이 유일성을 만족하는지 확인을 어떻게해? -> 각 튜플의 값을 합쳐 문자열로 만들고 set을 사용해 중복 확인
// 주어진 속성 조합이 최소성을 만족하는지 확인을 어떻게해? -> 현재의 조합이 이미 발견된 후보키들 부분집합인지 확인
// 각 조합의 빈도를 객체에 저장, 조합 생성 후 빈도 계산, 가장 많이 주문된 조합 찾아 result리스트에 추가, 최종적으로 결과 리스트를 사전 순 정렬
function solution(relation) {
  const cols = relation[0].length;
  const 후보키들 = [];
  
  for(let i = 1; i <= cols; i++) {
      const results = []
      combination([...Array(cols).keys()], i, 0, [], results)
      
      results.forEach(combination => {
          if(isUnique(combination, relation) && isMinimal(combination, 후보키들)){
              후보키들.push(combination)
          }
      })
  }
  return 후보키들.length;
}

function combination(arr, chance, index, stack, results) {
  if(chance == 0){
      results.push(stack.slice())
      return;
  }
  for(let i = index; i < arr.length; i++){
      stack.push(arr[i]);
      combination(arr, chance - 1, i + 1, stack, results)
      stack.pop()
  }
}

function isUnique(combination, relation) {
  const mySet = new Set();
  
  for(const row of relation) {
      const key = combination.map(index => row[index]).join()
      if(mySet.has(key)) return false
      mySet.add(key)
  }
  return true
}

function isMinimal(combination, 후보키들){
  for(const 후보키 of 후보키들) {
      if(후보키.every(item => combination.includes(item))) {
          return false
      }
  }
  return true
}

// test case
console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));  // 2
