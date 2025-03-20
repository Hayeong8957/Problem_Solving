const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [nstr, ...words] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(nstr);
// 모든 문자에 대해 재귀 조합
// 이미 사용한 문자는 사용하지 않도록 방문여부
// 같은 문자 조합이 여러 번 나오지 않도록 정렬

function findAnagrams(word) {
  const sortedChars = word.split('').sort();
  const used = Array(word.length).fill(false);
  const result = [];

  function backtrack(path) {
    if (path.length === word.length) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < sortedChars.length; i++) {
      if (used[i]) continue;
      if (i > 0 && sortedChars[i] === sortedChars[i - 1] && !used[i - 1])
        continue;

      used[i] = true;
      path.push(sortedChars[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
}

const results = words.map((word) => findAnagrams(word).join('\n')).join('\n');
console.log(results);
