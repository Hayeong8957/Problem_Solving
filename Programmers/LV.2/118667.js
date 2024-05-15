// 두 큐 합 같게 만들기
// [1, 2, 1, 2] [1, 10, 1, 2] 6, 14
// [1, 2, 1, 2, 1] [10, 1, 2] 7, 13
// [1, 2, 1, 2, 1, 10] [1, 2] 17 3
// [1] [2, 1, 2, 1, 10] [1, 2] 16 4
// [1, 2] [1, 2, 1, 10] [1, 2] 14 6
// [1, 2, 1] [2, 1, 10] [1, 2] 13 7
// [1, 2, 1, 2] [1, 10] [1, 2] 11 9
// [1, 2, 1, 2, 1] [10] [1, 2] 10 10 

function solution(queue1, queue2){
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)

  let avg = (sum1 + sum2)/2
  let queue = [...queue1, ...queue2];

  let pointer1 = 0;
  let pointer2 = queue1.length;
  let moves = 0; 

  while (moves < queue1.length * 3) {  
      if (sum1 === avg) {  
          return moves;
      }
      if (sum1 > avg) {
          sum1 -= queue[pointer1 % queue.length];  
          pointer1++; 
      } else {
          sum1 += queue[pointer2 % queue.length]; 
          pointer2++;  
      }
      moves++; 
  }

  return -1; 

}