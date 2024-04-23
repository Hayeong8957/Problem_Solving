let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs.readFileSync("/Users/shinhayeong/Desktop/Problem_Solving/BOJ/Javascript/문자열/test.txt").toString().trim().split('\n');
let n = Number(input[0])
let k = Number(input[1])

const visited = Array(n).fill(false);
const arr = [];
const answer = new Set()

for(let i = 2; i <= n+1; i++) arr.push(input[i].trim());

dfs("",0)
console.log(answer.size)
function dfs(num, cnt) {
  if(cnt === k) {
    answer.add(num)
    return
  }
  for(let i = 0; i<arr.length; i++) {
    if(visited[i]) continue;
    visited[i] = true
    dfs(num + arr[i], cnt + 1)
    visited[i] = false
  }
}