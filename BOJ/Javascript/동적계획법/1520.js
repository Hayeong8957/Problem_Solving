/*****************다시 풀어야하는 문제(DP개념 숙지용)*********************************
 * #
 * inflearn Section2 Array 봉우리 문제와 비슷함 =>
 *   1. 내자리 vs 상 좌표 비교
 *       - (i, j) vs (i-1, j) -> (-1, 0)
 *   2. 내자리 vs 우 좌표 비교
 *       - (i, j) vs (i, j+1) -> (0, 1)
 *   3. 내자리 vs 하 좌표 비교
 *       - (i, j) vs (i+1, j) -> (1, 0)
 *   4. 내자리 vs 좌 좌표 비교
 *       - (i, j) vs (i, j-1) -> (0, -1)
 *   => 비교할 위치를 배열로 저장해놓는거임
 *   row => [-1, 0, 1, 0], col => [0, 1, 0, -1]
 *
 * 문제) 직사각형 모양 지도, 각 칸에는 그 지점의 높이,
 * 각 지점 사이의 이동은 지도에서 상하좌우 이웃한 곳끼리만 가능
 * (0,0)에서 (M,N)까지 가려고함, 항상 높이가 더 낮은 지점으로만 이동
 * 항상 내리막길로만 이동해야함 -> 이동해야하는 지점이 현재 지점보다 작아야함.
 *
 * 입력) 첫째줄 -> 지도의 세로 크기(M), 가로크기(N)
 * 이어 다음 M개 줄에 걸쳐 한 줄에 N개씩 위에서부터 차례로
 * 각 지점의 높이가 빈 칸을 사이에 두고 주어짐.
 * M과 N은 각각 500이하의 자연수, 각 지점의 높이는 10000이하의 자연수
 *
 * 출력) 첫째 줄에 이동 가능한 경로의 수 H를 출력,
 * 모든 입력에 대해 H는 10억 이하의 음이 아닌 정수
 *
 * 풀이)
 * 0. DP는 -1로 초기화 => 방문을 하지 않았다는 뜻
 * - 현재 노드 값이 이미 구해져있다면(0 이상의 값이라면) 그 값 리턴
 * - -1도 0이상의 값도 아니라면 마지막 노드도 아니고 처음으로 방문한 노드라는 뜻이니
 * 4방향 DFS 탐색 실행
 *
 * 1. 점화식 : DP(M,N) = DP(M-1, N) + DP(M+1,N) + DP(M,N-1) + DP(M,N+1)
 * (각 R, C 위치에 있는 숫자들은 표의 범위 안에 있는 인덱스여야함 & 내리막길)
 * => (0,0)부터 DFS로 마지막 노드까지 탐색한다.
 *
 * 2. DFS는 좌표가 (row, col)인 노드에서 마지막 노드까지 가는 경로의 수를 리턴
 * - 현재 위치에서 다음 이동할 노드를 탐색하는 방향은 상하좌우
 * - 이동해야하는 지점이 현재 지점보다 작아야함
 * - 조건에 맞는 상하좌우만 재귀호출, 리턴값들을 싹다 더한 것이 현재 노드에서 마지막 노드까지 경로수
 *
 * 3. 4방향 DFS탐색 이전, 종료값과 메모이제이션으로 탐색없이 바로 리턴해줄 수 있는 경우 작성
 * - 현재 탐색중 노드가 마지막 노드인 경우, 종료값 1 리턴
 * - 마지막 노드 이전의 어떤 노드에서 4방향 재귀에서 마지막 노드를 호출했을 때, 1을 리턴
 *
 * 4. 4방향 탐색 후 이 노드는 탐색한 것이므로 DP에 H값을 넣어준 후 H를 리턴
 * - 넣어준 DP 값은 나중에 어떤 노드가 이 노드를 또 호출했을 떄,
 * - 이 노드에서 또 4방향 재귀를 하지 말고, 이미 구해놨던 H를 바로 리턴해줘서 시간복잡도를 줄이는데 활용
 *
 * 5. DFS(0,0)의 리턴 값 출력
 ***************************************************************************************/

/** node.js */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const row = [1, 0, -1, 0];
const col = [0, 1, 0, -1];
const table = [];
const DP = [];

for (let i = 1; i < M + 1; i++) {
  table.push(input[i].split(' ').map(Number));
}

/** DP 초기화 */
for (let i = 1; i < M; i++) {
  DP.push([]);
  for (let j = 0; j < N; j++) {
    DP[i].push(-1);
  }
}

/** DFS 함수 */
const DFS = (r, c) => {
  if ((r === M - 1) & (c === N - 1)) return 1;
  if (DP[r][c] != -1) return DP[r][c];

  let H = 0;
  for (let i = 0; i < 4; i++) {
    let setRow = r + row[i];
    let setCol = c + col[i];
    if ((setRow >= 0) & (setRow < M) & (setCol >= 0) & (setCol < N)) {
      if (table[setRow][setCol] < table[r][c]) {
        H += DFS(setRow, setCol);
      }
    }
  }
  DP[r][c] = H;
  return H;
};

console.log(DFS(0, 0));

/** C언어 연습*/
/**
#include <stdio.h>
#include <memory.h>

int N, M;
int table[501][501] = {0};
int dp[501][501] = {0};
int row[4] = {1, 0, -1, 0};
int col[4] = {0, 1, 0, -1};

int dfs(int r, int c) {
	if (dp[r][c] != -1)
		return dp[r][c];
	if (r < 0 || r >= N || c < 0 || c >= M)
		return 0;
	if (r == 0 && c == 0)
		return 1;

	dp[r][c] = 0;
	for (int i = 0; i < 4; i++) {
		int nextR = r + row[i];
		int nextC = c + col[i];
		if (table[nextR][nextC] > table[r][c])
			dp[r][c] += dfs(nextR, nextC);
	}
	return dp[r][c];
}

int main() {
	scanf("%d %d", &N, &M);
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < M; j++) {
			scanf("%d", &table[i][j]);
		}
	}
	memset(dp, -1, M - 1);
	printf("%d", dfs(N - 1, M - 1));
	return 0;
}
 * 
 */
