const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map(item => item.split(' ').map(Number))


let minDiff = Infinity;
let startTeam = [];

combination(N / 2, 0)
console.log(minDiff);

function combination(chance, index) {
  if(chance == 0) {
    let linkTeam = [];
    for(let i = 0; i < N; i++){
      if(!startTeam.includes(i)) {
        linkTeam.push(i)
      }
    }
    const start능력치 = calc능력치(startTeam, arr);
    const link능력치 = calc능력치(linkTeam, arr);
    const diff = Math.abs(start능력치 - link능력치);
    minDiff = Math.min(minDiff, diff);
    return;
  } 
  for(let i = index; i < N; i++ ){
    startTeam.push(i);
    combination(chance - 1, i + 1);
    startTeam.pop();
  }
}

function calc능력치(team, arr) {
  let 능력치 = 0;
  for(let i = 0; i < team.length; i++){
    for(let j = 0; j < team.length; j++){
      if( i!== j) {
        능력치 += arr[team[i]][team[j]];
      }
    }
  }
  return 능력치;
}