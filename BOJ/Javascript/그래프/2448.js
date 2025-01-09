const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim();
const N = parseInt(input, 10);

function printStars(N) {
  const canvas = Array.from({ length: N }, () => Array(2 * N - 1).fill('-'));

  function drawTriangle(x, y, size) {
    if (size === 3) {
      canvas[x][y] = '*';
      canvas[x + 1][y - 1] = '*';
      canvas[x + 1][y + 1] = '*';
      canvas[x + 2][y - 2] = '*';
      canvas[x + 2][y - 1] = '*';
      canvas[x + 2][y] = '*';
      canvas[x + 2][y + 1] = '*';
      canvas[x + 2][y + 2] = '*';
      return;
    }

    const half = size / 2;
    drawTriangle(x, y, half); // 위쪽
    drawTriangle(x + half, y - half, half); // 왼쪽 아래
    drawTriangle(x + half, y + half, half); // 오른쪽 아래
  }

  drawTriangle(0, N - 1, N);

  return canvas.map((row) => row.join('')).join('\n');
}

console.log(printStars(N));
