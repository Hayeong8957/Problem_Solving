function solution(orders, course) {
  const answer = [];

  // console.log('orders >> ', orders)
  // console.log('course >> ', course)
  
  course.forEach((courseSize) => {
      const combinationCnt = {}
      
      orders.forEach((order) => {
          const sortedOrder = order.split('').sort()
          const results = []
          combination(courseSize, 0, sortedOrder, [], results)

          // console.log('results >> ', results)
          
          results.forEach(combination => {
            // console.log('combination >> ', combination)
              const key = combination.join('')
              combinationCnt[key] = (combinationCnt[key] || 0) + 1;
          })
          // console.log('combinationCnt >> ', combinationCnt)
      })
      
      const maxCnt = Math.max(...Object.values(combinationCnt))
      console.log('maxCnt >> ', maxCnt)
      if (maxCnt > 1) {
        console.log('Object.entries(combinationCnt) >> ', Object.entries(combinationCnt))
        Object.entries(combinationCnt).forEach(([combination, count]) => {
          if (count === maxCnt) {
            answer.push(combination);
          }
        });
        console.log('answer >> ', answer)
      }
  })
  
  return answer.sort();
}

// cource를 돌면서 orders를 돌려 -> 2가 들어가면 각 문자열들을 모조리 2 조합으로 돌려
// 그러면 조합이 2, 3, 4에 맞게 각각 results에 넣은다음
// results 배열에서 그 배열의 요소들을 묶은 뒤, map에 저장해 -> map은 조합의 빈도수를 나타내는 Map임
// 조합의 빈도수를 나타내는 map value들 중에서 큰 cnt를 가진 녀석을 answer에 담으셈(push)
function combination(chance, index, arr, stack, results) {  
  if(chance == 0) {
      results.push(stack.slice())
      return
  }
  for(let i = index; i < arr.length; i++){
      stack.push(arr[i])
      combination(chance - 1, i + 1, arr, stack, results)
      stack.pop()
  }
}



// test case
console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));  