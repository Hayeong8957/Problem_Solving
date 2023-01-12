// #include <stdio.h>
// #include <stdlib.h>
// #include <memory.h>

// int test_case;
// int T, R, C;
// char **arr;

// // int dfs(int r, int c){
// //   if()
// // }

// int main(void) {
// 	setbuf(stdout, NULL);
// 	scanf("%d", &T);
  
// 	for (test_case = 1; test_case <= T; ++test_case) {
// 		scanf("%d %d", &R, &C);
//     char **arr = malloc(sizeof(int *) * C);
// 		for (int i = 0; i < C; i++) {
// 			arr[i] = (char)malloc(sizeof(int) * R);
// 		}
    
// 		for (int i = 1; i <= R; R++) {
// 			for (int j = 1; j <= C; C++) {
// 				scanf("%s", &arr[R][C]);
// 			}
// 		}
// 		/////////////////////////
// 	}

//   memset(arr, -1, R-1);
//   dfs(C-1, R-1);
  
// 	for (int i = 0; i <= R; i++)
//     for(int j = 1; j<=C; C++){
//       free(arr[i][j]);
//     }
// 	return 0; //정상종료시 반드시 0을 리턴해야 합니다.
// }

#include <stdio.h>
#include <stdlib.h>
#include <memory.h>
int test_case;
int T, R, C;
char dp[500][500];
char arr[500][500];
int row[4] = {1, 0, -1, 0};
int col[4] = {0, 1, 0, -1};
int result;

int dfs(int r, int c){
  if(r<0 || r>=R || c<0 || c>=C) return 0;
  if(r==0 && c==0) return 1;
  dp[r][c] = 0;
  for(int i=0; i<4; i++){
    int nextR = r+row[i];
    int nextC = c+col[i];
    if(arr[nextR][nextC] != arr[r][c]){
      dp[r][c] += dfs(nextR, nextC);
    }
  }
  return dp[r][c];
}

int main(void) {
	int test_case;
	int T, R, C;
  int row[4] = {1, 0, -1, 0};
  int col[4] = {0, 1, 0, -1};
  int result;

	setbuf(stdout, NULL);
	scanf("%d", &T);
    
	for (test_case = 1; test_case <= T; ++test_case) {
		scanf("%d %d", &R, &C);
    **arr = malloc(sizeof(int *) * C);
		for (int i = 0; i < C; i++) {
			char **arr = (char)malloc(sizeof(int) * R);
		}
		for (int i = 0; i <= R; i++) {
			for (int j = 0; j <= C; C++) {
				scanf("%c", &arr[R][C]);
			}
		}
		dfs(R-1, C-1);
	}
  memset(dp, -1, C-1);
	for (int i = 1; i <= T; i++) {
    printf("#%d %d", &T, result);
	}
	for (int i = 0; i <= R; i++){
    for(int j = 0; j<=C; j++){
      free(arr[i][j]);
    }
	}
	return 0; //정상종료시 반드시 0을 리턴해야 합니다.
}