function solution(numbers) {
  var answer = [];
  var stack = [];

  while (numbers.length) {
    if (!stack.length) {
      answer.push(-1);
      stack.push(numbers.pop());
    } else {
      if (stack[stack.length - 1] > numbers[numbers.length - 1]) {
        answer.push(stack[stack.length - 1]);
        stack.push(numbers.pop());
      } else {
        stack.pop();
      }
    }
  }
  return answer.reverse();
}

console.log(solution([2, 3, 3, 5]));
